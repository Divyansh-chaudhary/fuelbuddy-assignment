import LoginViewVue from "@/views/LoginView.vue";
import type { Meta, StoryObj } from "@storybook/vue3";

const meta: Meta<typeof LoginViewVue> = {
  title: "Login Page",
  component: LoginViewVue,
  argTypes: {
    showForgotPasswordLink: {
      defaultValue: false,
      description: "Show/Hide -> Forgot Password Link",
      name: "Forgot Password",
      type: "boolean",
    },
    rememberLogin: {
      defaultValue: false,
      description: "Show/Hide -> Remember login details",
      name: "Remember Me",
      type: "boolean",
    },
    showSignup: {
      defaultValue: true,
      description: "Show/Hide -> Don’t have an account yet? Sign Up",
      name: "Don’t have an account yet? Sign Up",
      type: "boolean",
    },
  },
};

export default meta;

type Story = StoryObj<typeof LoginViewVue>;

export const MoreFeatuers: Story = {
  render: (args) => ({
    components: { LoginViewVue },
    setup: () => ({ args }),
    template: "<LoginViewVue v-bind='args' />",
  }),
};
