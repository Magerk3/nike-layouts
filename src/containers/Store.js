import { CardsView } from "../components/CardsView";
import { IconSwitch } from "../components/IconSwitch";
import { ListView } from "../components/ListView";
import { useState } from "react";

export const Store = ({ products }) => {
    const [currentLayout, setCurrentLayout] = useState("view_module");

    const handleClick = () => {
        currentLayout === "view_module"
            ? setCurrentLayout("view_list")
            : setCurrentLayout("view_module");
    };

    return (
        <div className="Store">
            <IconSwitch icon={currentLayout} onSwitch={handleClick} />
            {currentLayout === "view_module" ? (
                <CardsView cards={products} />
            ) : (
                <ListView items={products} />
            )}
        </div>
    );
};
