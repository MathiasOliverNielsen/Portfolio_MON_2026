// Diamond.jsx
// Simple diamond-shaped decorative component

export default function Diamond({ size = 12, color = "var(--cyan)", opacity = 0.25, style = {}, ...props }) {
  return (
    <div
      style={{
        position: "absolute",
        width: size,
        height: size,
        background: color,
        transform: "rotate(45deg)",
        opacity,
        ...style,
      }}
      {...props}
    />
  );
}
