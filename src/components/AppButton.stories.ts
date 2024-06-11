import type { Meta, StoryObj } from '@storybook/vue3';

import AppButton from './AppButton.vue';

import sourceCode from './CheckMenu.vue?raw';

import CodeMirror from './common/CodeMirror.vue';

/**
 * 타입 선언의 영역입니다.
 */
const meta: Meta<typeof AppButton> = {
  component: AppButton,
};

export default meta;
type Story = StoryObj<typeof AppButton>;

export const Primary: Story = {
  render: (args) => ({
    components: { AppButton, CodeMirror },
    setup() {
      return { args, sourceCode };
    },
    template: `
    <div class='flex justify-center absolute right-0 w-1/2 h-full pr-2'>
    <em>Code Preview</em>
    <CodeMirror :sourceCode=sourceCode />
    </div>
    <AppButton v-bind="args">{{ args.default }}</AppButton>`,
  }),
  args: {
    outlined: true,
    text: 'Test Button',
  },
};
