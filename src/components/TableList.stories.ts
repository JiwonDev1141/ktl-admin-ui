import type { Meta, StoryObj } from '@storybook/vue3';

import TableList from './TableList.vue';
// import SourceCodeBox from './common/SourceCodeBox.vue';

import CodeMirror from './common/CodeMirror.vue';

import sourceCode from './TableList.vue?raw';

const meta: Meta<typeof TableList> = {
  component: TableList,
};

export default meta;
type Story = StoryObj<typeof TableList>;

export const Primary: Story = {
  render: (args) => ({
    components: { TableList, CodeMirror },
    setup() {
      return { args, sourceCode };
    },
    template: `
    <div class='flex justify-center absolute right-0 w-1/2 h-full pr-2'>
    <em>Code Preview</em>
    <CodeMirror :sourceCode=sourceCode />
    </div>
    <TableList v-bind="args" />
    `,
  }),
  args: {
    headerData: ['장비명', '예약시작일', '예약종료일', '예약자명', '장비이용관련정보'],
    bodyData: [
      '로타리 킬른 \n #52', '2024-09-26 \n 08:00', '2024-09-26 \n 08:00', '이이수', '장비 점검',
      '로타리 킬른 \n #52', '2024-09-26 \n 08:00', '2024-09-26 \n 08:00', '이이수', '장비 점검',
      '로타리 킬른 \n #52', '2024-09-26 \n 08:00', '2024-09-26 \n 08:00', '이이수', '장비 점검',
  ]
  },
};
