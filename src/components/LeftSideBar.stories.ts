import { Meta, StoryObj } from '@storybook/vue3';

import LeftSideBar from './LeftSideBar.vue';

import CodeMirror from './common/CodeMirror.vue';

import sourceCode from './LeftSideBar.vue?raw';

const meta: Meta<typeof LeftSideBar> = {
  component: LeftSideBar,
};

export default meta;
type Story = StoryObj<typeof LeftSideBar>;

export const Primary: Story = {
  render: (args) => ({
    components: { LeftSideBar, CodeMirror },
    setup() {
      return { args, sourceCode };
    },

    template: `
    <div class='flex justify-center absolute right-0 w-1/2 h-full pr-2'>
    <em>Code Preview</em>
    <CodeMirror :sourceCode=sourceCode />
    </div>
    <LeftSideBar v-bind="args" />
    `,
  }),

  args: {},
};
