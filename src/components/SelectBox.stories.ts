import type { Meta, StoryObj } from '@storybook/vue3';

import SelectBox from './SelectBox.vue';

import CodeMirror from './common/CodeMirror.vue';

import sourceCode from './SelectBox.vue?raw';

/**
 * 타입 선언의 영역입니다.
 */
const meta: Meta<typeof SelectBox> = {
  component: SelectBox,
};

interface menuList {
  name: string;
  value: string;
}

export default meta;
type Story = StoryObj<typeof SelectBox>;

export const Primary: Story = {
  render: (args) => ({
    components: { SelectBox, CodeMirror },
    setup() {
      return { args, sourceCode };
    },
    template: `
    <div class='flex justify-center absolute right-0 w-1/2 h-full pr-2'>
    <em>Code Preview</em>
    <CodeMirror :sourceCode=sourceCode />
    </div>
    <SelectBox v-bind="args">{{ args.default }}</SelectBox>
    `,
  }),
  args: {
    menuList: [
      {
        name: '클린룸',
        value: 'CLEAN_ROOM',
      },
      {
        name: '공조실',
        value: 'AIR_CONDITIONING_ROOM',
      },
      {
        name: '사무동',
        value: 'OFFICE_BUILDING_ROOM',
      },
      {
        name: '합성실',
        value: 'SYNTHETIC_ROOM',
      },
      {
        name: '주입실',
        value: 'INFUSION_ROOM',
      },
    ],
  },
};
