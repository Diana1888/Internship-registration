import { createMachine } from 'xstate';

export const registrationMachine = createMachine({
  id: 'registration',
  initial: 'welcome',

  context: {
    portfolioUrl: '',
    projectUrl: '',
    knowsNode: '',
  },

  states: {
    welcome: {
      on: { NEXT: 'portfolio' },
    },
    portfolio: {
      on: {
        NEXT: 'project',
        BACK: 'welcome',
      },
    },
    project: {
      on: {
        NEXT: 'node',
        BACK: 'portfolio',
      },
    },
    node: {
      on: {
        NEXT: 'submit',
        BACK: 'project',
      },
    },
    submit: {
      on: {
        BACK: 'node',
        SUBMIT: 'submitted',
      },
    },
    submitted: {
      type: 'final',
    },
  },
});