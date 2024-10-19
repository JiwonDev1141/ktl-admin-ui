import type { Meta, StoryObj } from '@storybook/vue3';

import TableList2 from './TableList2.vue';
// import SourceCodeBox from './common/SourceCodeBox.vue';

import CodeMirror from './common/CodeMirror.vue';

import sourceCode from './TableList2.vue?raw';

const meta: Meta<typeof TableList2> = {
  component: TableList2,
};

export default meta;
type Story = StoryObj<typeof TableList2>;

export const Primary: Story = {
  render: (args) => ({
    components: { TableList2, CodeMirror },
    setup() {
      return { args, sourceCode };
    },
    template: `
    <div class='flex justify-center absolute right-0 w-1/2 h-full pr-2'>
    <em>Code Preview</em>
    <CodeMirror :sourceCode=sourceCode />
    </div>
    <TableList2 v-bind="args" />
    `,
  }),
  args: {
  
  },
};
