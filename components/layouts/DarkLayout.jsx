export const DarkLayout = ({ children }) => {
  return (
    <div
      style={{
        backgroundColor: "#131B20",
        height: "100%",
        color: "white",
      }}
    >
      {children}
    </div>
  );
};
