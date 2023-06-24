import { observer } from 'mobx-react-lite';
import { useContext } from 'react';
import { AppStoreContext } from '../context/AppStoreContext';
import { IconButton } from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';

interface IPaletteProps {
    lock: boolean
}

const Palette = observer(function PaletteComponent(props: IPaletteProps) {
    const store = useContext(AppStoreContext);
    const { hatColor, topColor, bottomColor, shoeColor, addColorSwatch, closetMode,
        hatLock, setHatLock, topLock, setTopLock, bottomLock, setBottomLock, shoeLock, setShoeLock } = store;

    return (

        <>

            {props.lock ? (
                <div>
                    <div className="flex">
                        <div onClick={closetMode ? (() => addColorSwatch("hat")) : undefined} className={`h-[72px] w-20 rounded-none ${closetMode ? 'cursor-pointer' : ''}`} style={{ backgroundColor: hatColor }} ></div>
                        <IconButton size="large" onClick={() => setHatLock(!hatLock)}>
                            <LockIcon fontSize="large" style={{ color: hatLock ? "white" : "grey" }} />
                        </IconButton>
                    </div>
                    <div className="flex">
                        <div onClick={closetMode ? (() => addColorSwatch("top")) : undefined} className={`h-[72px] w-20 rounded-none ${closetMode ? 'cursor-pointer' : ''}`} style={{ backgroundColor: topColor }} ></div>
                        <IconButton size="large" onClick={() => setTopLock(!topLock)}>
                            <LockIcon fontSize="large" style={{ color: topLock ? "white" : "grey" }} />
                        </IconButton>
                    </div>
                    <div className="flex">
                        <div onClick={closetMode ? (() => addColorSwatch("bottom")) : undefined} className={`h-[72px] w-20 rounded-none ${closetMode ? 'cursor-pointer' : ''}`} style={{ backgroundColor: bottomColor }} ></div>
                        <IconButton size="large" onClick={() => setBottomLock(!bottomLock)}>
                            <LockIcon fontSize="large" style={{ color: bottomLock ? "white" : "grey" }} />
                        </IconButton>
                    </div>
                    <div className="flex">
                        <div onClick={closetMode ? (() => addColorSwatch("shoes")) : undefined} className={`h-[72px] w-20 rounded-none ${closetMode ? 'cursor-pointer' : ''}`} style={{ backgroundColor: shoeColor }} ></div>
                        <IconButton size="large" onClick={() => setShoeLock(!shoeLock)}>
                            <LockIcon fontSize="large" style={{ color: shoeLock ? "white" : "grey" }} />
                        </IconButton>
                    </div>
                </div>
            ) : (
                <>
                    <div className="">
                        <div
                            className="h-[72px] w-20 rounded-none"
                            style={{ backgroundColor: hatColor }}
                        ></div>
                    </div>
                    <div className="">
                        <div
                            className="h-[72px] w-20 rounded-none"
                            style={{ backgroundColor: topColor }}
                        ></div>
                    </div>
                    <div className="">
                        <div
                            className="h-[72px] w-20 rounded-none"
                            style={{ backgroundColor: bottomColor }}
                        ></div>
                    </div>
                    <div className="">
                        <div
                            className="h-[72px] w-20 rounded-none"
                            style={{ backgroundColor: shoeColor }}
                        ></div>
                    </div>
                </>
            )}

        </>
    );

});

export default Palette;