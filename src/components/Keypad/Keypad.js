import { calculate, deleteOne, deleteAll, evaluate } from '../../redux/actions';
import { keys } from '../../utils/keys';
import { useDispatch } from 'react-redux';
import Button from '../Button/Button';
import './keypad.css';

const Keypad = () => {
    const dispatch = useDispatch();

    const handleKeys = (key) => {
        switch (key) {
            case 'Del':
                dispatch(deleteOne());
                break;
            case 'C':
                dispatch(deleteAll());
                break;
            case '=':
                dispatch(evaluate());
                break;
            default:
                dispatch(calculate(key));
        }
    };
    
    return (
        <div className='keyboard'>
            {
                keys.map((section, index) => {
                    return <div key={index}>
                        {
                            section.map(key => <Button handleKeys={handleKeys} buttonKey={key}/>)
                        }
                    </div>
                })
            }
        </div>
    );
};

export default Keypad;
