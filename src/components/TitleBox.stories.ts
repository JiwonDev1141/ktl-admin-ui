import type { Meta, StoryObj } from '@storybook/vue3';

import TitleBox from './TitleBox.vue';
import SourceCodeBox from './common/SourceCodeBox.vue';

import sourceCode from './TitleBox.vue?raw';

const meta: Meta<typeof TitleBox> = {
  component: TitleBox,
};

export default meta;
type Story = StoryObj<typeof TitleBox>;

export const Primary: Story = {
  render: (args) => ({
    components: { TitleBox },
    setup() {
      return { args, sourceCode };
    },
    template: `
    <div class='flex justify-center absolute right-0 w-1/2 h-full pr-2'>
    <em>Code Preview</em>
    <textarea disabled='true' class='w-full h-full px-10 py-4 bg-gray-800 text-green-400 rounded-md'>{{sourceCode}}</textarea>
    </div>
    <TitleBox v-bind="args" />
    `,
  }),
  args: {
    width: '300px',
    text: 'text',
  },
};
