import { observer } from 'mobx-react-lite';
import { useContext } from 'react';
import { AppStoreContext } from '../context/AppStoreContext';
import { useUser } from '../context/AuthContext';
import GroupDropdown from './GroupDropdown';

const Outfits = observer(() => {

    const { user } = useUser();

    const store = useContext(AppStoreContext);
    const { shownOutfits, selectedOutfit, donOutfit, selectedGroup } = store;

    return (
        <>
            {user ? (
                <div className="flex flex-col h-full justify-center">

                    <GroupDropdown />

                    <div className="flex h-full items-center justify-center">
                        {shownOutfits.length === 0 ? (
                            (selectedGroup == 'all') ? (
                                <p style={{ fontFamily: "Verdana", fontSize: "24px", color: "gray" }}>
                                    Click the heart button to save an outfit
                                </p>
                            ) : (
                                <p style={{ fontFamily: "Verdana", fontSize: "24px", color: "gray" }}>
                                    There are no outfits containing only garments from this group
                                </p>
                            )
                        ) : (
                            shownOutfits.map((outfit, i) => {
                                const { id, hat, top, bottom, shoe } = outfit;
                                const selected = id === selectedOutfit?.id;
                                return (
                                    <div key={i} className="cursor-pointer"
                                        style={{ border: selected ? "4px solid white" : "none" }}
                                        onClick={() => donOutfit(outfit)}>
                                        <div className="h-[72px] w-20 rounded-none" style={{ backgroundColor: hat.color }}></div>
                                        <div className="h-[72px] w-20 rounded-none" style={{ backgroundColor: top.color }}></div>
                                        <div className="h-[72px] w-20 rounded-none" style={{ backgroundColor: bottom.color }}></div>
                                        <div className="h-[72px] w-20 rounded-none" style={{ backgroundColor: shoe.color }}></div>
                                    </div>
                                );
                            })
                        )}
                    </div>
                </div>
            ) : (
                <div className="flex h-full items-center justify-center">
                    <p style={{ fontFamily: "Verdana", fontSize: "24px", color: "gray" }}>Sign in to save outfits</p>
                </div>
            )}
        </>

    );

});

export default Outfits;