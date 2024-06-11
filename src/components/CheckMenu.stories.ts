import type { Meta, StoryObj } from '@storybook/vue3';

import CheckMenu from './CheckMenu.vue';

import sourceCode from './CheckMenu.vue?raw';

import CodeMirror from './common/CodeMirror.vue';

/**
 * 타입 선언의 영역입니다.
 */
const meta: Meta<typeof CheckMenu> = {
  component: CheckMenu,
};

export default meta;
type Story = StoryObj<typeof CheckMenu>;

export const Primary: Story = {
  render: (args) => ({
    components: { CheckMenu, CodeMirror },
    setup() {
      return { args, sourceCode };
    },
    template: `
    <div class='flex justify-center absolute right-0 w-1/2 h-full pr-2'>
    <em>Code Preview</em>
    <CodeMirror :sourceCode=sourceCode />
    </div>
    <CheckMenu v-bind="args">{{ args.default }}</CheckMenu>`,
  }),
  args: {
    color: 'blue',
    name: '체크박스',
  },
};
