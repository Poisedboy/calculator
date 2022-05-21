import { useSelector } from "react-redux";
import './screen.css';

const Screen = (props) => {
    const expression = useSelector(state => state.calculator.expression);
    const total = useSelector(state => state.calculator.total);
    return (
        <div className="display">
            <h5>{expression === ''? 0 : expression}</h5>
            <h5>{total}</h5>
        </div>
    );
};

export default Screen;
