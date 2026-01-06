// components/ButtonLink.jsx
const ButtonLink = ({ href, children, ...rest }) => {
  return (
    <div className="hero__btn hero__btn-link">
      <a href={href} {...rest}>
        {children}
      </a>
    </div>
  );
};

export default ButtonLink;
