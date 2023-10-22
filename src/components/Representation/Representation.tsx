import { useState } from "react";
import styled from "styled-components";
import { RepresentationProps, RepresentationTypes } from "./Representation.types";

const RepresentationContainer = styled.span`
`

const RepresentationViewContainer = styled.span`
`

const RepresentationEditContainer = styled.span`
`

export const Representation = <T extends unknown>
(
    {
        value,
        onSubmit,
        representationType,
        EditRepresentation,
        ViewRepresentation
    }: RepresentationProps<T>
) => {

    const [
        currentValue,
        setCurrentValue
    ] = useState<T>(value)

    const [
        currentRepresentationType,
        setCurrentRepresentationType
    ] = useState<RepresentationTypes>(representationType ? representationType : RepresentationTypes.view)

    const toggleRepresentationType = () => {
        if (currentRepresentationType === RepresentationTypes.view) {
            setCurrentRepresentationType(RepresentationTypes.edit)
        } else {
            setCurrentRepresentationType(RepresentationTypes.view)
        }
    }

    const handleSubmit = (newValue: T) => {
        setCurrentValue(newValue)
        toggleRepresentationType()
        onSubmit(newValue)
    }

    const handleCancel = () => {
        toggleRepresentationType()
    }

    const handleViewClick = () => {
        toggleRepresentationType()
    }

    const handleEditBlur = () => {
        toggleRepresentationType()
    }

    return (
        <RepresentationContainer className="gle-representation-container">
            {currentRepresentationType === RepresentationTypes.view &&
                <RepresentationViewContainer className="gle-representation-view-container" onClick={handleViewClick}>
                    <ViewRepresentation value={currentValue}/>
                </RepresentationViewContainer>
            }
            {currentRepresentationType === RepresentationTypes.edit &&
                <RepresentationEditContainer className="gle-representation-edit-container" onBlur={handleEditBlur}>
                    <EditRepresentation value={currentValue} onSubmit={handleSubmit} onCancel={handleCancel}/>
                </RepresentationEditContainer>
            }
        </RepresentationContainer>
    )
}