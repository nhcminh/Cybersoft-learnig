import {React, useState, Component} from "react";

class Shield extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false,
      info: null,
    };
  }
  componentDidCatch(error, info) {
    console.log("da co loi xay ra");
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  render() {
    if (this.state.hasError) {
      return <div>Loi roi huhu</div>;
    }
    return this.props.children;
  }
}

const FiveCharacterMax = () => {
  const [value, setValue] = useState("");
  if (value.length > 5) {
    throw new Error("Loi cmnr");
  }
  return (
    <div>
      My fivemaxcharacter component
      <input
        placeholder="nhap vo"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

function ErrorBoundary(props) {
  return (
    <div>
      <Shield>
        <FiveCharacterMax />
      </Shield>
    </div>
  );
}

export default ErrorBoundary;
