const Button = (props) => {
  const { className, btnText } = props;
  return <button className={className}>{btnText}</button>;
};

const element = (
  <div className="page_container">
    <h1 className="heading">Social Buttons</h1>
    <div className="btn_container">
      <Button className="yellowBtn" btnText="Like" />
      <Button className="whiteBtn" btnText="Comment" />
      <Button className="blueBtn" btnText="Share" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
