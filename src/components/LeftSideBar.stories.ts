import type { Meta, StoryObj } from '@storybook/vue3';

import LeftSideBar from './LeftSideBar.vue';

const meta: Meta<typeof LeftSideBar> = {
  component: LeftSideBar,
};

export default meta;
type Story = StoryObj<typeof LeftSideBar>;

export const Primary: Story = {
  render: (args) => ({
    components: { LeftSideBar },
    setup() {
      return { args };
    },
    template: '<LeftSideBar v-bind="args" />',
  }),
  args: {},
};
