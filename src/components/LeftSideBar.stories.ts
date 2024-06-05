import { Meta, StoryObj } from '@storybook/vue3';

import LeftSideBar from './LeftSideBar.vue';

import sourceCode from './LeftSideBar.vue?raw';

const meta: Meta<typeof LeftSideBar> = {
  component: LeftSideBar,
};

export default meta;
type Story = StoryObj<typeof LeftSideBar>;

export const Primary: Story = {
  render: (args) => ({
    components: { LeftSideBar },
    setup() {
      return { args, sourceCode };
    },

    template: `
    <div class='flex justify-center absolute right-0 w-1/2 h-full pr-2'>
    <em>Code Preview</em>
    <textarea disabled='true' class='w-full h-full px-10 py-4 bg-gray-800 text-green-400 rounded-md'>{{sourceCode}}</textarea>
    </div>
    <LeftSideBar v-bind="args" />
    `,
  }),

  args: {},
};
