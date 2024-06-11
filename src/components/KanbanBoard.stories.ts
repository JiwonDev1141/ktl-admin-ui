import type { Meta, StoryObj } from '@storybook/vue3';

import KanbanBoard from './KanbanBoard.vue';

import sourceCode from './KanbanBoard.vue?raw';

import CodeMirror from './common/CodeMirror.vue';

const meta: Meta<typeof KanbanBoard> = {
  component: KanbanBoard,
};

export default meta;
type Story = StoryObj<typeof KanbanBoard>;

export const Primary: Story = {
  render: (args) => ({
    components: { KanbanBoard, CodeMirror },
    setup() {
      return { args, sourceCode };
    },
    template: `
    <div class='flex justify-center absolute right-0 w-1/2 h-full pr-2'>
    <em>Code Preview</em>
    <CodeMirror :sourceCode=sourceCode />
    </div>
    <KanbanBoard v-bind="args" />
    `,
  }),
  args: {
    title: '작업 1',
    description: '작업에 대한 설명..',
    date: new Date().toLocaleDateString(),
  },
};
