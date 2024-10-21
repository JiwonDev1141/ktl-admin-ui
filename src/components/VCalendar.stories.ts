import type { Meta, StoryObj } from '@storybook/vue3';

import VCalendar from './VCalendar.vue';
// import SourceCodeBox from './common/SourceCodeBox.vue';

import CodeMirror from './common/CodeMirror.vue';

import sourceCode from './VCalendar.vue?raw';

const meta: Meta<typeof VCalendar> = {
  component: VCalendar,
};

export default meta;
type Story = StoryObj<typeof VCalendar>;

export const Primary: Story = {
  render: (args) => ({
    components: { VCalendar, CodeMirror },
    setup() {
      return { args, sourceCode };
    },
    template: `
    <div class='flex justify-center absolute right-0 w-1/2 h-full pr-2'>
    <em>Code Preview</em>
    <CodeMirror :sourceCode=sourceCode />
    </div>
    <VCalendar v-bind="args" />
    `,
  }),
  args: {
  },
};
