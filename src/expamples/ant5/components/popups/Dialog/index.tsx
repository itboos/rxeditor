import { CSSProperties, forwardRef, memo } from "react"
import { IIcon } from "react-shells/ant5/components/IconView/model"

export type DialogProps = {
  title?: React.ReactElement,
  icon?: IIcon,
  style?: CSSProperties,
  centered?: boolean,
  closable?: boolean,
  destroyOnClose?: boolean,
  //关闭后聚焦触发元素
  focusTriggerAfterClose?: boolean,
  content?: React.ReactElement,
  footer?: React.ReactElement,
  //是否支持键盘 esc 关闭
  keyboard?: boolean,
  //是否展示遮罩
  mask?: boolean,
  //点击蒙层是否允许关闭
  maskClosable?: boolean,
  changeRemind?: boolean,
  width?: number | string,
  actionComponent?: React.ReactElement,
}

export const Dialog = memo(forwardRef<HTMLDivElement>((props: DialogProps, ref) => {
  const {
    icon,
    title,
    actionComponent,
    style,
    centered,
    closable,
    destroyOnClose,
    focusTriggerAfterClose,
    content,
    footer,
    keyboard,
    mask,
    maskClosable,
    changeRemind,
    width,
    ...other
  } = props;

  return (
    <div ref={ref} style={{ display: "inline-block", position:"relative", ...style }}  {...other}>
      {actionComponent}
      {/* <Modal>

      </Modal> */}
    </div>
  )
}))