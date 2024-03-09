import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { StepOneDetails } from './Steps/StepOneDetails';
import { StepTwoAttributes } from './Steps/StepTwoAttributes';
import { StepThreeEdgesHindrances } from './Steps/StepThreeEdgesHindrances';
import { StepFourGear } from './Steps/StepFourGear';
import { StepFiveReviewAndSave } from './Steps/StepFiveReviewAndSave';


const CreationWizard = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [isStepOneValid, setIsStepOneValid] = useState(false);
    const [isStepThreeValid, setIsStepThreeValid] = useState(false);
    const [characterData, setCharacterData] = useState({
        attributes: {
          agility: 'd4',
          smarts: 'd4',
          spirit: 'd4',
          strength: 'd4',
          vigor: 'd4',
        },
        gear: [],
        money: '',
      });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name.includes('.')) {
            const keys = name.split('.');
            setCharacterData(prevState => ({
                ...prevState,
                [keys[0]]: {
                    ...(prevState[keys[0]] || {}),
                    [keys[1]]: value,
                },
            }));
        } else {
            setCharacterData(prevState => ({
                ...prevState,
                [name]: value,
            }));
        }

        if (currentStep === 1) {
            const isNameFilled = name === 'name' ? !!value.trim() : !!characterData.name.trim();
            const isRaceSelected = name === 'race' ? !!value : !!characterData.race;
            setIsStepOneValid(isNameFilled && isRaceSelected);
        }
    };
    
    const nextStep = () => setCurrentStep(currentStep + 1);
    const prevStep = () => setCurrentStep(currentStep - 1);
    const renderStep = () => {
        switch (currentStep) {
            case 1:
                return <StepOneDetails characterData={characterData} handleInputChange={handleInputChange} />;
            case 2:
                return <StepTwoAttributes characterData={characterData} handleInputChange={handleInputChange} />;
            case 3:
                return <StepThreeEdgesHindrances characterData={characterData} handleInputChange={handleInputChange} setIsValid={setIsStepThreeValid} />;
            case 4:
                return <StepFourGear characterData={characterData} handleInputChange={handleInputChange} />;
            default:
                return <StepFiveReviewAndSave characterData={characterData} handleInputChange={handleInputChange} />;
        }
    };
  
    return (
        <>
            {renderStep()}
            <Modal.Footer>
                {currentStep > 1 && 
                    <Button variant="secondary" onClick={prevStep}>
                        Back
                    </Button>
                }
                {currentStep <= 4 && 
                    <Button 
                        variant="primary" 
                        onClick={nextStep} 
                        disabled={(currentStep === 1 && !isStepOneValid) || (currentStep === 3 && !isStepThreeValid)}>
                        Next
                    </Button>
                }
                {currentStep === 5 && 
                    <Button variant="success" onClick={() => {/* Trigger save logic here */}}>
                        Finish
                    </Button>
                }
            </Modal.Footer>
        </>
    );
};

export default CreationWizard;