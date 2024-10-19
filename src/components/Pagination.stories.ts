import type { Meta, StoryObj } from '@storybook/vue3';

import Pagination from './Pagination.vue';

import sourceCode from './Pagination.vue?raw';

import CodeMirror from './common/CodeMirror.vue';

const meta: Meta<typeof Pagination> = {
  component: Pagination,
};

export default meta;
type Story = StoryObj<typeof Pagination>;

export const Primary: Story = {
  render: (args) => ({
    components: { Pagination, CodeMirror },
    setup() {
      return { args, sourceCode };
    },
    template: `
    <div class='flex justify-center absolute right-0 w-1/2 h-full pr-2'>
    <em>Code Preview</em>
    <CodeMirror :sourceCode=sourceCode />
    </div>
    <Pagination v-bind="args" />
    `,
  }),
  args: {
    
  },
};
