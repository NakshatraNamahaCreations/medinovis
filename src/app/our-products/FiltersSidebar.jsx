"use client";
import React from "react";

export default function FiltersSidebar({
  filters,
  setFilters,
  onClear,
  categories = ["All","Diabetes","Vitamins & Nutritions","Immunity Boosters","Fitness & Health"],

  // 👇 customize colors here
  activeBg = "#0077b6",
  activeText = "#ffffff",
  inactiveBg = "#ffffff",
  inactiveText = "#0f1d2b",
  borderColor = "#cfd8dc",
  hoverBg = "#f3f8fb",
}) {
  const selectCategory = (cat) =>
    setFilters((prev) => ({ ...prev, category: cat === "All" ? null : cat }));

  const isActive = (cat) =>
    (cat === "All" && !filters?.category) || filters?.category === cat;

  const baseChipStyle = {
    padding: "8px 12px",
    borderRadius: 999,
    fontSize: 14,
    fontWeight: 600,
    border: `1px solid ${borderColor}`,
    transition: "background-color .15s ease, color .15s ease, border-color .15s ease",
    cursor: "pointer",
    textAlign: "left",
  };

  return (
    <div className="p-3 bg-white rounded shadow-sm">
      <h6 className="mb-3">CATEGORIES</h6>

      <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
        {categories.map((cat) => {
          const active = isActive(cat);
          return (
            <button
              key={cat}
              type="button"
              onClick={() => selectCategory(cat)}
              aria-pressed={active}
              style={{
                ...baseChipStyle,
                backgroundColor: active ? activeBg : inactiveBg,
                color: active ? activeText : inactiveText,
                borderColor: active ? activeBg : borderColor,
              }}
              onMouseEnter={(e) => {
                if (!active) e.currentTarget.style.backgroundColor = hoverBg;
              }}
              onMouseLeave={(e) => {
                if (!active) e.currentTarget.style.backgroundColor = inactiveBg;
              }}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {onClear && (
        <button
          type="button"
          onClick={onClear}
          style={{
            marginTop: 10,
            marginLeft: 4,
            background: "transparent",
            border: "none",
            color: activeBg,
            fontWeight: 700,
            fontSize: 13,
            cursor: "pointer",
            padding: 0,
          }}
        >
          Clear all
        </button>
      )}
    </div>
  );
}
