import styles from './ProgressBar.module.scss';

export const ProgressBar = ({ currentStep, totalSteps, steps }) => {

return (
    <div className={styles.container}>
        {steps.map((step, index) => (
            <div
                key={index}
                className={`${styles.stepLine} ${index + 1 === totalSteps && styles.lastStepLine}`}
            >
                <div className={`${styles.step} ${step <= currentStep && styles['active-step']}`}>
                    {step}
                </div>

                {index < totalSteps - 1 && (
                    <div className={styles.progressLineWrapper}>
                        <div className={styles.progressLine}>
                            <div className={styles.activeProgressLine} 
                                style={{ width: step < currentStep ? '100%' : step === currentStep ? '50%' : '0%' }}
                            />
                        </div>
                    </div>
                )}
            </div>
        ))}
    </div>
);
};