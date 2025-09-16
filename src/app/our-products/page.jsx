  "use client";

  import { useMemo, useState } from "react";
  import { Container, Row, Col } from "react-bootstrap";

  import PaginationBar from "./PaginationBar";
  import ProductCard from "./ProductCard";
  import  { SORTS } from "./SortBar";
  import FiltersSidebar from "./FiltersSidebar";
  // import { PRODUCTS } from "./app/data/Products"; 
import { PRODUCTS } from "../data/Products";
import SiteNavbar from "../components/SiteNavbar";
import BreadcrumbBar from "../components/BreadcrumbBar";
import Footer from "../components/Footer";

  const perPageDefault = 12;

  export default function ProductsPage() {
    const [filters, setFilters] = useState({
      category: null,          // null = All
      subcategories: [],
      brands: [],
      priceMin: null,
      priceMax: null,
      minRating: null,
    });

    const [sort, setSort] = useState(SORTS[0].value);
    const [page, setPage] = useState(1);
    const perPage = perPageDefault;

    // Derive lists
    const categories = useMemo(() => {
      const set = new Set(PRODUCTS.map((p) => p.category).filter(Boolean));
      return ["All", ...Array.from(set).sort()];
    }, []);

    const subcategories = useMemo(
      () => Array.from(new Set(PRODUCTS.map((p) => p.subcategory).filter(Boolean))).sort(),
      []
    );

    const brands = useMemo(
      () => Array.from(new Set(PRODUCTS.map((p) => p.brand).filter(Boolean))).sort(),
      []
    );

    // Filtering
    const filtered = useMemo(() => {
      return PRODUCTS.filter((p) => {
        if (filters.category && p.category !== filters.category) return false;
        if (filters.subcategories.length && !filters.subcategories.includes(p.subcategory)) return false;
        if (filters.brands.length && !filters.brands.includes(p.brand)) return false;
        if (filters.priceMin != null && (p.price ?? 0) < filters.priceMin) return false;
        if (filters.priceMax != null && (p.price ?? 0) > filters.priceMax) return false;
        if (filters.minRating != null && (p.rating ?? 0) < filters.minRating) return false;
        return true;
      });
    }, [filters]);

    // Sorting
    const sorted = useMemo(() => {
      const items = [...filtered];
      switch (sort) {
        case "price_asc":
          items.sort((a, b) => (a.price ?? 0) - (b.price ?? 0));
          break;
        case "price_desc":
          items.sort((a, b) => (b.price ?? 0) - (a.price ?? 0));
          break;
        case "rating_desc":
          items.sort((a, b) => (b.rating ?? 0) - (a.rating ?? 0));
          break;
        case "discount_desc": {
          const disc = (x) => (x?.mrp ? (x.mrp - (x.price ?? x.mrp)) / x.mrp : 0);
          items.sort((a, b) => disc(b) - disc(a));
          break;
        }
        default:
          // relevance / default
          break;
      }
      return items;
    }, [filtered, sort]);

    // Pagination
    const total = sorted.length;
    const start = (page - 1) * perPage;
    const end = start + perPage;
    const pageItems = sorted.slice(start, end);

    const clearAll = () => {
      setFilters({
        category: null,
        subcategories: [],
        brands: [],
        priceMin: null,
        priceMax: null,
        minRating: null,
      });
      setPage(1);
    };

    const handleAdd = (p) => {
      alert(`Added: ${p.name || p.title}`);
    };

    return (
      <>
      <SiteNavbar/>
       <BreadcrumbBar items={[{ label: "Home", href: "/" }, { label: "Our Products" }]} />
          <div className="mb-4">
          {/* You can swap to next/image if you want */}
          <img
            src="/images/productbanner.png"
            alt="Promo"
            className="img-fluid rounded"
            style={{ width: "100%", height: "150px", objectFit: "cover" }}
          />
        </div>
      <Container className="py-4">
         
        {/* breadcrumb mimic */}
        {/* <div className="text-muted small mb-2" style={{ fontFamily: "montserrat" }}>
          Home &nbsp;›&nbsp; Our Products
        </div> */}

        {/* Banner area */}
     

        <Row className="g-4">
          {/* LEFT: Filters */}
          <Col lg={3}>
            <FiltersSidebar
              filters={filters}
              setFilters={(f) => {
                setFilters(f);
                setPage(1);
              }}
              subcategories={subcategories}
              brands={brands}
              categories={categories}
              // onClear={clearAll}
            />
          </Col>

          {/* RIGHT: Sort + Grid */}
          <Col lg={9}>
           

            {filters.category && (
              <h5 className="mb-3" >
                {filters.category}
              </h5>
            )}

            {/* 3 cards per row at md+ */}
            <Row xs={1} sm={2} md={3} className="g-3">
              {pageItems.map((p) => (
                <Col key={p.id}>
                  <ProductCard product={p} onAdd={handleAdd} />
                </Col>
              ))}
            </Row>

            <PaginationBar page={page} setPage={setPage} total={total} perPage={perPage} />
          </Col>
        </Row>
      </Container>
      <br />
      <Footer/>
      </>
    );
  }
