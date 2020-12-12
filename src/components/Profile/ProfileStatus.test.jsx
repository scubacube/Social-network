import React from 'react';
import { create } from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("Profile status component", () => {
    test("status from props should be in a state", () => {
        const component = create(<ProfileStatus status="something interesing..." />);
        const instance = component.getInstance();
        expect(instance.state.status).toBe("something interesing...");
    });
    test("after creaton span with status should be displayed", () => {
        const component = create(<ProfileStatus status="something interesing..." />);
        const root = component.root;
        const span = root.findByType("span");
        expect(span).not.toBeNull();
    });

    test("after creaton input shouldn't be displayed", () => {
        const component = create(<ProfileStatus status="something interesing..." />);
        const root = component.root;
        expect(() => {
            const input = root.findByType("input");
        }).toThrow();
    });

    test("input should be displayed in editMode instead of span", () => {
        const component = create(<ProfileStatus status="something interesing..." />);
        const root = component.root;
        const span = root.findByType("span");
        span.props.onDoubleClick();
        const input = root.findByType("input");
        expect(input.props.value).toBe("something interesing...");
    });
});