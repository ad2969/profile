import React from "react";

interface Entry {
    title: string;
    content: React.ReactElement;
}

interface Props {
    entries: Entry[];
    selectedIndex: number | null;
    setSelectedIndex: any;
}

const Accordion: React.FunctionComponent<Props> = ({ entries, selectedIndex, setSelectedIndex }) => {
    return (
        <div className="home-accordion-entries">
            {entries.map(({ title, content }, i) => (
                <div
                    key={`${title}-accordion-entry-${i}`}
                    className={"home-accordion-entry" + (selectedIndex !== null && i === selectedIndex ? " active" : "")}
                >
                    <div
                        className="home-accordion-entry__title button--darken"
                        onClick={() => {
                            selectedIndex === i ? setSelectedIndex(null) : setSelectedIndex(i);
                            let scrollToIndex = i;
                            if (selectedIndex !== null && i < selectedIndex) scrollToIndex -= 1;
                            if (scrollToIndex < 0) scrollToIndex = 0;
                            document.getElementById(`accordion-staller-${scrollToIndex}`)?.scrollIntoView(false);
                        }}
                    >{title}</div>
                    <div className="home-accordion-entry__indicator t--unselectable">&gt;</div>
                    <div className="home-accordion-entry__content">
                        <p>{content}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Accordion;
