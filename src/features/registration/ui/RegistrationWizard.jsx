import { useMachine } from '@xstate/react';
import { useForm, FormProvider } from 'react-hook-form';
import { registrationMachine } from '../model/registrationMachine';
import { StepNode } from './steps/Node/StepNode';
import { StepSubmit } from './steps/Submit/StepSubmit'
import { StepPortfolio } from './steps/Portfolio/StepPortfolio';
import styles from './RegistrationWizard.module.scss';
import { StepProject } from './steps/Project/StepProject';
import { ProgressBar } from './steps/Welcome/ProgressBar';
import { StepWelcome } from './steps/Welcome/StepWelcome';
import { Check } from 'lucide-react';


export const RegistrationWizard = () => {
  const steps = [1, 2, 3, 4, 5, 6];
  const [state, send] = useMachine(registrationMachine);

  const getCurrentStep = () => {
    switch (state.value) {
      case 'welcome': return 1;
      case 'portfolio': return 2;
      case 'project': return 3;
      case 'node': return 4;
      case 'submit': return 5;
      case 'submitted': return 6;
      default: return 1;
    }
  };
  
  const methods = useForm({
    mode: 'onChange',
    defaultValues: {
    portfolioUrl: '',
    projectUrl: '',
    knowsNode: '',
    fullName: '',
    email: '',
    agree: false,
    },
  });

  return (
    <FormProvider {...methods}>
      <div className={styles.registrationPage}>
        <h1 className={styles.mainText}>Internship Registration at AL TECH LABS</h1>
      <ProgressBar
        currentStep={getCurrentStep()}
        totalSteps={steps.length}
        steps={steps} />

        {state.value === 'welcome' && 
            <StepWelcome
              onNext={()=> send({ type: 'NEXT' })}
            />
        } 

        {state.value === 'portfolio' && 
          <StepPortfolio
            onBack={()=> send({ type: 'BACK' })}

            onSubmit={(data) => {
              send({ type: 'NEXT', data });
            }} />
        }

        {state.value === 'project' && 
          <StepProject
            onBack={()=> send({ type: 'BACK' })}

            onSubmit={(data) => {
              send({ type: 'NEXT', data });
            }} />
        }

        {state.value === 'node' && 
          <StepNode
            onBack={()=> send({ type: 'BACK' })}
            
            onSubmit={(data) => {
              send({ type: 'NEXT', data });
            }}  />
        }

        {state.value === 'submit' && 
          <StepSubmit 
            onBack={()=> send({ type: 'BACK' })}
            
            onSubmit={(data) => {
              console.log('Заявка отправлена:', data);
              send({ type: 'SUBMIT', data });
            }} 
            
            send={send}/>
        }         

          {state.value === 'submitted' && (
            <div className={styles.submitted}>
            <h2>Thank you! Your application has been submitted.</h2>
            <div className={styles.checkmark}>
            <Check style={{ color: 'var(--light-color)' }} size={48}/>
            </div>
            </div>
          )}
        <footer>© AL Tech Labs 2024</footer>
      </div> 
            

    </FormProvider>
  );
};