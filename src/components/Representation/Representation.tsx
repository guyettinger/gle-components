import { useState } from "react";
import { RepresentationProps, RepresentationTypes } from "./Representation.types";

const Representation = <T extends unknown>
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
        <span>
            {currentRepresentationType === RepresentationTypes.view &&
                <span onClick={handleViewClick}>
                    <ViewRepresentation value={currentValue}/>
                </span>
            }
            {currentRepresentationType === RepresentationTypes.edit &&
                <span onBlur={handleEditBlur}>
                    <EditRepresentation value={currentValue} onSubmit={handleSubmit} onCancel={handleCancel}/>
                </span>
            }
        </span>
    )
}

export default Representation