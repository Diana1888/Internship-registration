export const message = {
    required: {
        must: "This field is required!",
        email: "An email address is required!",
        text: "Please enter your first/last name",
        portfolio: "Please enter a link to your portfolio",
        reactproject: "Please enter a link to your React project",
        selectOption: "Please select one of the options"
    },
    errors: {
        validEmail: "Please enter a valid email address",
        validName: "This field should contain letters only",
        validPortfolio: "Please provide a valid link to your website, Notion page, PDF, or another convenient format",
        validProject: "Please provide a valid link to your React project"
    }
};

export const portfolioRegex = /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)|^application\/(pdf|msword)$|^text\/plain$/i;
export const projectRegex = /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/i;
export const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const textRegex = /^[a-zA-Z\s]+$|^[\u0400-\u04FF\s]+$/;



