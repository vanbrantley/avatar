import { observer } from 'mobx-react-lite';
import { useContext } from 'react';
import { AppStoreContext } from '../context/AppStoreContext';

interface ISwatchProps {
    color: string,
    area: string
}

const Swatch = observer((props: ISwatchProps) => {

    const store = useContext(AppStoreContext);
    const { handleColorChangeSwatch } = store;

    return (
        <div onClick={() => handleColorChangeSwatch(props.color, props.area)} className="w-20 h-10 rounded-md cursor-pointer" style={{ backgroundColor: props.color }}></div>
    );

});

export default Swatch;