import { observer } from 'mobx-react-lite';
import { useContext } from 'react';
import { AppStoreContext } from '../context/AppStoreContext';

const Avatar = observer(() => {
    const store = useContext(AppStoreContext);

    const { hatColor, faceColor, topColor, bottomColor, shoeColor, handleAreaChange } = store;

    return (
        <div className="grid gap-0">
            <div
                onClick={() => handleAreaChange('hat')}
                className="h-[50px] w-20 mx-auto cursor-pointer"
                style={{
                    backgroundColor: hatColor,
                    borderTopLeftRadius: '60% 90%',
                    borderTopRightRadius: '60% 90%',
                    borderBottomLeftRadius: "10%",
                    borderBottomRightRadius: "10%"
                }}
            ></div>
            <div
                onClick={() => handleAreaChange('face')}
                className="h-[60px] w-[70px] mx-auto cursor-pointer"
                style={{
                    backgroundColor: faceColor,
                    borderBottomLeftRadius: '120%',
                    borderBottomRightRadius: '120%',
                }}
            ></div>
            <div
                onClick={() => handleAreaChange('top')}
                className="h-[220px] w-40 mx-auto cursor-pointer"
                style={{
                    backgroundColor: topColor,
                    borderTopLeftRadius: '30%',
                    borderTopRightRadius: '30%',
                }}
            ></div>
            <div
                onClick={() => handleAreaChange('bottom')}
                className="h-[220px] w-40 mx-auto cursor-pointer"
                style={{ backgroundColor: bottomColor }}
            ></div>
            <div
                onClick={() => handleAreaChange('shoes')}
                className="h-[72px] w-[220px] mx-auto rounded-full cursor-pointer"
                style={{ backgroundColor: shoeColor }}
            ></div>
        </div>
    );
});

export default Avatar;