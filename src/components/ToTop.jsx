import Icon from "../assets/up-arrow-icon.png";
import useScroll from "../hooks/useScroll";

const ToTop = () => {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const { isScrolledTop } = useScroll();
  return (
    <div
      onClick={handleClick}
      className={`toTop-btn ${isScrolledTop ? "topShow" : ""}`}
    >
      <img alt="ToTop" src={Icon} />
    </div>
  );
};

export default ToTop;
