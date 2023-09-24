import DashboardViewVue from "@/views/DashboardView.vue";
import type { Meta, StoryObj } from "@storybook/vue3";

const meta: Meta<typeof DashboardViewVue> = {
  title: "Dashboard Page",
  component: DashboardViewVue,
};

export default meta;

type Story = StoryObj<typeof DashboardViewVue>;

export const PrimaryCard: Story = {
  render: (args) => ({
    components: { DashboardViewVue },
    setup: () => ({ args }),
    template: "<DashboardViewVue v-bind='args' />",
  }),
  args: {
    primary: true,
  },
};

export const UserProfileCard: Story = {
  name: "user profile card with emoji",
  render: () => ({
    components: { DashboardViewVue },
    template: '<DashboardViewVue emoji="😄👍😍💯" />',
  }),
};
