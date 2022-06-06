import BackgroundImage from "../../image/error/error_page.png";
export const ErrorPage = () => {
  return (
    <div className="errorContainer">
      <div>
        <img src={BackgroundImage} alt="Error" />
      </div>
    </div>
  );
};
