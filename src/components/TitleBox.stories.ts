import type { Meta, StoryObj } from '@storybook/vue3';

import TitleBox from './TitleBox.vue';
// import SourceCodeBox from './common/SourceCodeBox.vue';

import CodeMirror from './common/CodeMirror.vue';

import sourceCode from './TitleBox.vue?raw';

const meta: Meta<typeof TitleBox> = {
  component: TitleBox,
};

export default meta;
type Story = StoryObj<typeof TitleBox>;

export const Primary: Story = {
  render: (args) => ({
    components: { TitleBox, CodeMirror },
    setup() {
      return { args, sourceCode };
    },
    template: `
    <div class='flex justify-center absolute right-0 w-1/2 h-full pr-2'>
    <em>Code Preview</em>
    <CodeMirror :sourceCode=sourceCode />
    </div>
    <TitleBox v-bind="args" />
    `,
  }),
  args: {
    width: '300px',
    text: 'text',
  },
};
