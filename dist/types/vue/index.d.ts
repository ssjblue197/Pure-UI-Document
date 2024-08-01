import type { DefineComponent } from "vue";

import type { PAnimatedImage } from "../../components/animated-image/animated-image.component.js";
import type { PAlert } from "../../components/alert/alert.component.js";
import type { PAnimation } from "../../components/animation/animation.component.js";
import type { PAvatar } from "../../components/avatar/avatar.component.js";
import type { PBadge } from "../../components/badge/badge.component.js";
import type { PBreadcrumb } from "../../components/breadcrumb/breadcrumb.component.js";
import type { PBreadcrumbItem } from "../../components/breadcrumb-item/breadcrumb-item.component.js";
import type { PButton } from "../../components/button/button.component.js";
import type { PButtonGroup } from "../../components/button-group/button-group.component.js";
import type { PCalendar } from "../../components/calendar/calendar.component.js";
import type { PCard } from "../../components/card/card.component.js";
import type { PCarousel } from "../../components/carousel/carousel.component.js";
import type { PCarouselItem } from "../../components/carousel-item/carousel-item.component.js";
import type { PCheckbox } from "../../components/checkbox/checkbox.component.js";
import type { PColorPicker } from "../../components/color-picker/color-picker.component.js";
import type { PCopyButton } from "../../components/copy-button/copy-button.component.js";
import type { PDetails } from "../../components/details/details.component.js";
import type { PDialog } from "../../components/dialog/dialog.component.js";
import type { PDivider } from "../../components/divider/divider.component.js";
import type { PDrawer } from "../../components/drawer/drawer.component.js";
import type { PDropdown } from "../../components/dropdown/dropdown.component.js";
import type { PFormatBytes } from "../../components/format-bytes/format-bytes.component.js";
import type { PFormatDate } from "../../components/format-date/format-date.component.js";
import type { PFormatNumber } from "../../components/format-number/format-number.component.js";
import type { PIcon } from "../../components/icon/icon.component.js";
import type { PIconButton } from "../../components/icon-button/icon-button.component.js";
import type { PImageComparer } from "../../components/image-comparer/image-comparer.component.js";
import type { PInclude } from "../../components/include/include.component.js";
import type { PInput } from "../../components/input/input.component.js";
import type { PMenu } from "../../components/menu/menu.component.js";
import type { PMenuItem } from "../../components/menu-item/menu-item.component.js";
import type { PMenuLabel } from "../../components/menu-label/menu-label.component.js";
import type { PMutationObserver } from "../../components/mutation-observer/mutation-observer.component.js";
import type { POption } from "../../components/option/option.component.js";
import type { PPopup } from "../../components/popup/popup.component.js";
import type { PProgressBar } from "../../components/progress-bar/progress-bar.component.js";
import type { PProgressRing } from "../../components/progress-ring/progress-ring.component.js";
import type { PQrCode } from "../../components/qr-code/qr-code.component.js";
import type { PRadio } from "../../components/radio/radio.component.js";
import type { PRadioButton } from "../../components/radio-button/radio-button.component.js";
import type { PRadioGroup } from "../../components/radio-group/radio-group.component.js";
import type { PRating } from "../../components/rating/rating.component.js";
import type { PRelativeTime } from "../../components/relative-time/relative-time.component.js";
import type { PRange } from "../../components/range/range.component.js";
import type { PResizeObserver } from "../../components/resize-observer/resize-observer.component.js";
import type { PSelect } from "../../components/select/select.component.js";
import type { PSkeleton } from "../../components/skeleton/skeleton.component.js";
import type { PSpinner } from "../../components/spinner/spinner.component.js";
import type { PSplitPanel } from "../../components/split-panel/split-panel.component.js";
import type { PSwitch } from "../../components/switch/switch.component.js";
import type { PTab } from "../../components/tab/tab.component.js";
import type { PTabGroup } from "../../components/tab-group/tab-group.component.js";
import type { PTabPanel } from "../../components/tab-panel/tab-panel.component.js";
import type { PTag } from "../../components/tag/tag.component.js";
import type { PTextarea } from "../../components/textarea/textarea.component.js";
import type { PTooltip } from "../../components/tooltip/tooltip.component.js";
import type { PTree } from "../../components/tree/tree.component.js";
import type { PTreeItem } from "../../components/tree-item/tree-item.component.js";
import type { PVisuallyHidden } from "../../components/visually-hidden/visually-hidden.component.js";

type PAnimatedImageProps = {
  /** The path to the image to load. */
  src?: PAnimatedImage["src"];
  /** A description of the image used by assistive devices. */
  alt?: PAnimatedImage["alt"];
  /** Plays the animation. When this attribute is remove, the animation will pause. */
  play?: PAnimatedImage["play"];
  /**  */
  animatedImage?: PAnimatedImage["animatedImage"];
  /**  */
  frozenFrame?: PAnimatedImage["frozenFrame"];
  /**  */
  isLoaded?: PAnimatedImage["isLoaded"];
  /** Emitted when the image loads successfully. */
  "onp-load"?: (e: CustomEvent<never>) => void;
  /** Emitted when the image fails to load. */
  "onp-error"?: (e: CustomEvent<never>) => void;
};

type PAlertProps = {
  /** Indicates whether or not the alert is open. You can toggle this attribute to show and hide the alert, or you can
use the `show()` and `hide()` methods and this attribute will reflect the alert's open state. */
  open?: PAlert["open"];
  /** Enables a close button that allows the user to dismiss the alert. */
  closable?: PAlert["closable"];
  /** The alert's theme variant. */
  variant?: PAlert["variant"];
  /** The length of time, in milliseconds, the alert will show before closing itself. If the user interacts with
the alert before it closes (e.g. moves the mouse over it), the timer will restart. Defaults to `Infinity`, meaning
the alert will not close on its own. */
  duration?: PAlert["duration"];
  /**  */
  base?: PAlert["base"];
  /** Emitted when the alert opens. */
  "onp-show"?: (e: CustomEvent<never>) => void;
  /** Emitted after the alert opens and all animations are complete. */
  "onp-after-show"?: (e: CustomEvent<never>) => void;
  /** Emitted when the alert closes. */
  "onp-hide"?: (e: CustomEvent<never>) => void;
  /** Emitted after the alert closes and all animations are complete. */
  "onp-after-hide"?: (e: CustomEvent<never>) => void;
};

type PAnimationProps = {
  /** The name of the built-in animation to use. For custom animations, use the `keyframes` prop. */
  name?: PAnimation["name"];
  /** Plays the animation. When omitted, the animation will be paused. This attribute will be automatically removed when
the animation finishes or gets canceled. */
  play?: PAnimation["play"];
  /** The number of milliseconds to delay the start of the animation. */
  delay?: PAnimation["delay"];
  /** Determines the direction of playback as well as the behavior when reaching the end of an iteration.
[Learn more](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-direction) */
  direction?: PAnimation["direction"];
  /** The number of milliseconds each iteration of the animation takes to complete. */
  duration?: PAnimation["duration"];
  /** The easing function to use for the animation. This can be a Pure UI easing function or a custom easing function
such as `cubic-bezier(0, 1, .76, 1.14)`. */
  easing?: PAnimation["easing"];
  /** The number of milliseconds to delay after the active period of an animation sequence. */
  "end-delay"?: PAnimation["endDelay"];
  /** Sets how the animation applies styles to its target before and after its execution. */
  fill?: PAnimation["fill"];
  /** The number of iterations to run before the animation completes. Defaults to `Infinity`, which loops. */
  iterations?: PAnimation["iterations"];
  /** The offset at which to start the animation, usually between 0 (start) and 1 (end). */
  "iteration-start"?: PAnimation["iterationStart"];
  /** Sets the animation's playback rate. The default is `1`, which plays the animation at a normal speed. Setting this
to `2`, for example, will double the animation's speed. A negative value can be used to reverse the animation. This
value can be changed without causing the animation to restart. */
  "playback-rate"?: PAnimation["playbackRate"];
  /**  */
  defaultPot?: PAnimation["defaultPot"];
  /** The keyframes to use for the animation. If this is set, `name` will be ignored. */
  keyframes?: PAnimation["keyframes"];
  /** Gets and sets the current animation time. */
  currentTime?: PAnimation["currentTime"];
  /** Emitted when the animation is canceled. */
  "onp-cancel"?: (e: CustomEvent<never>) => void;
  /** Emitted when the animation finishes. */
  "onp-finish"?: (e: CustomEvent<never>) => void;
  /** Emitted when the animation starts or restarts. */
  "onp-start"?: (e: CustomEvent<never>) => void;
};

type PAvatarProps = {
  /** The image source to use for the avatar. */
  image?: PAvatar["image"];
  /** A label to use to describe the avatar to assistive devices. */
  label?: PAvatar["label"];
  /** Initials to use as a fallback when no image is available (1-2 characters max recommended). */
  initials?: PAvatar["initials"];
  /** Indicates how the browser should load the image. */
  loading?: PAvatar["loading"];
  /** The shape of the avatar. */
  shape?: PAvatar["shape"];

  /** The image could not be loaded. This may because of an invalid URL, a temporary network condition, or some unknown cause. */
  "onp-error"?: (e: CustomEvent<never>) => void;
};

type PBadgeProps = {
  /** The badge's theme variant. */
  variant?: PBadge["variant"];
  /** Draws a pill-style badge with rounded edges. */
  pill?: PBadge["pill"];
  /** Makes the badge pulsate to draw attention. */
  pulse?: PBadge["pulse"];
};

type PBreadcrumbProps = {
  /** The label to use for the breadcrumb control. This will not be shown on the screen, but it will be announced by
screen readers and other assistive devices to provide more context for users. */
  label?: PBreadcrumb["label"];
  /**  */
  defaultSlot?: PBreadcrumb["defaultSlot"];
  /**  */
  separatorSlot?: PBreadcrumb["separatorSlot"];
};

type PBreadcrumbItemProps = {
  /** Optional URL to direct the user to when the breadcrumb item is activated. When set, a link will be rendered
internally. When unset, a button will be rendered instead. */
  href?: PBreadcrumbItem["href"];
  /** Tells the browser where to open the link. Only used when `href` is set. */
  target?: PBreadcrumbItem["target"];
  /** The `rel` attribute to use on the link. Only used when `href` is set. */
  rel?: PBreadcrumbItem["rel"];
};

type PButtonProps = {
  /**  */
  title?: PButton["title"];
  /** The button's theme variant. */
  variant?: PButton["variant"];
  /** The button's size. */
  size?: PButton["size"];
  /** Draws the button with a caret. Used to indicate that the button triggers a dropdown menu or similar behavior. */
  caret?: PButton["caret"];
  /** Disables the button. */
  disabled?: PButton["disabled"];
  /** Draws the button in a loading state. */
  loading?: PButton["loading"];
  /** Draws an outlined button. */
  outline?: PButton["outline"];
  /** Draws a pill-style button with rounded edges. */
  pill?: PButton["pill"];
  /** Draws a circular icon button. When this attribute is present, the button expects a single `<p-icon>` in the
default slot. */
  circle?: PButton["circle"];
  /** The type of button. Note that the default value is `button` instead of `submit`, which is opposite of how native
`<button>` elements behave. When the type is `submit`, the button will submit the surrounding form. */
  type?: PButton["type"];
  /** The name of the button, submitted as a name/value pair with form data, but only when this button is the submitter.
This attribute is ignored when `href` is present. */
  name?: PButton["name"];
  /** The value of the button, submitted as a pair with the button's name as part of the form data, but only when this
button is the submitter. This attribute is ignored when `href` is present. */
  value?: PButton["value"];
  /** When set, the underlying button will be rendered as an `<a>` with this `href` instead of a `<button>`. */
  href?: PButton["href"];
  /** Tells the browser where to open the link. Only used when `href` is present. */
  target?: PButton["target"];
  /** When using `href`, this attribute will map to the underlying link's `rel` attribute. Unlike regular links, the
default is `noreferrer noopener` to prevent security exploits. However, if you're using `target` to point to a
specific tab/window, this will prevent that from working correctly. You can remove or change the default value by
setting the attribute to an empty string or a value of your choice, respectively. */
  rel?: PButton["rel"];
  /** Tells the browser to download the linked file as this filename. Only used when `href` is present. */
  download?: PButton["download"];
  /** The "form owner" to associate the button with. If omitted, the closest containing form will be used instead. The
value of this attribute must be an id of a form in the same document or shadow root as the button. */
  form?: PButton["form"];
  /** Used to override the form owner's `action` attribute. */
  formaction?: PButton["formAction"];
  /** Used to override the form owner's `enctype` attribute. */
  formenctype?: PButton["formEnctype"];
  /** Used to override the form owner's `method` attribute. */
  formmethod?: PButton["formMethod"];
  /** Used to override the form owner's `novalidate` attribute. */
  formnovalidate?: PButton["formNoValidate"];
  /** Used to override the form owner's `target` attribute. */
  formtarget?: PButton["formTarget"];
  /**  */
  button?: PButton["button"];
  /**  */
  invalid?: PButton["invalid"];
  /** Gets the validity state object */
  validity?: PButton["validity"];
  /** Gets the validation message */
  validationMessage?: PButton["validationMessage"];
  /** Emitted when the button loses focus. */
  "onp-blur"?: (e: CustomEvent<never>) => void;
  /** Emitted when the button gains focus. */
  "onp-focus"?: (e: CustomEvent<never>) => void;
  /** Emitted when the form control has been checked for validity and its constraints aren't satisfied. */
  "onp-invalid"?: (e: CustomEvent<never>) => void;
};

type PButtonGroupProps = {
  /** A label to use for the button group. This won't be displayed on the screen, but it will be announced by assistive
devices when interacting with the control and is strongly recommended. */
  label?: PButtonGroup["label"];
  /**  */
  defaultSlot?: PButtonGroup["defaultSlot"];
  /**  */
  disableRole?: PButtonGroup["disableRole"];
};

type PCalendarProps = {
  /** The month to render, 1-12/ */
  month?: PCalendar["month"];
  /** The year to render. */
  year?: PCalendar["year"];
  /** Determines how day labels are shown, e.g. "M", "Mon", or "Monday". */
  "day-labels"?: PCalendar["dayLabels"];
  /** Determines how month labels are shown, e.g. "J", "Jan", or "January". */
  "month-labels"?: PCalendar["monthLabels"];
  /** When true, dates from the previous and next month will also be shown to fill out the grid. */
  "show-adjacent-dates"?: PCalendar["showAdjacentDates"];
  /** Draws the target dates as a selection in the calendar. */
  selectedDates?: PCalendar["selectedDates"];

  /** Emitted when the date changes. */
  "onp-change"?: (e: CustomEvent<never>) => void;
};

type PCardProps = {};

type PCarouselProps = {
  /** When set, allows the user to navigate the carousel in the same direction indefinitely. */
  loop?: PCarousel["loop"];
  /** When set, show the carousel's navigation. */
  navigation?: PCarousel["navigation"];
  /** When set, show the carousel's pagination indicators. */
  pagination?: PCarousel["pagination"];
  /** When set, the slides will scroll automatically when the user is not interacting with them. */
  autoplay?: PCarousel["autoplay"];
  /** Specifies the amount of time, in milliseconds, between each automatic scroll. */
  "autoplay-interval"?: PCarousel["autoplayInterval"];
  /** Specifies how many slides should be shown at a given time. */
  "slides-per-page"?: PCarousel["slidesPerPage"];
  /** Specifies the number of slides the carousel will advance when scrolling, useful when specifying a `slides-per-page`
greater than one. It can't be higher than `slides-per-page`. */
  "slides-per-move"?: PCarousel["slidesPerMove"];
  /** Specifies the orientation in which the carousel will lay out. */
  orientation?: PCarousel["orientation"];
  /** When set, it is possible to scroll through the slides by dragging them with the mouse. */
  "mouse-dragging"?: PCarousel["mouseDragging"];
  /**  */
  scrollContainer?: PCarousel["scrollContainer"];
  /**  */
  paginationContainer?: PCarousel["paginationContainer"];
  /**  */
  activeSlide?: PCarousel["activeSlide"];
  /**  */
  scrolling?: PCarousel["scrolling"];
  /**  */
  dragging?: PCarousel["dragging"];
  /** Emitted when the active slide changes. */
  "onp-slide-change"?: (e: CustomEvent<{ index: number; slide: PCarouselItem }>) => void;
};

type PCarouselItemProps = {};

type PCheckboxProps = {
  /**  */
  title?: PCheckbox["title"];
  /** The name of the checkbox, submitted as a name/value pair with form data. */
  name?: PCheckbox["name"];
  /** The current value of the checkbox, submitted as a name/value pair with form data. */
  value?: PCheckbox["value"];
  /** The checkbox's size. */
  size?: PCheckbox["size"];
  /** Disables the checkbox. */
  disabled?: PCheckbox["disabled"];
  /** Draws the checkbox in a checked state. */
  checked?: PCheckbox["checked"];
  /** Draws the checkbox in an indeterminate state. This is usually applied to checkboxes that represents a "select
all/none" behavior when associated checkboxes have a mix of checked and unchecked states. */
  indeterminate?: PCheckbox["indeterminate"];
  /** By default, form controls are associated with the nearest containing `<form>` element. This attribute allows you
to place the form control outside of a form and associate it with the form that has this `id`. The form must be in
the same document or shadow root for this to work. */
  form?: PCheckbox["form"];
  /** Makes the checkbox a required field. */
  required?: PCheckbox["required"];
  /** The checkbox's help text. If you need to display HTML, use the `help-text` slot instead. */
  "help-text"?: PCheckbox["helpText"];
  /**  */
  input?: PCheckbox["input"];
  /** The default value of the form control. Primarily used for resetting the form control. */
  defaultChecked?: PCheckbox["defaultChecked"];
  /** Gets the validity state object */
  validity?: PCheckbox["validity"];
  /** Gets the validation message */
  validationMessage?: PCheckbox["validationMessage"];
  /** Emitted when the checkbox loses focus. */
  "onp-blur"?: (e: CustomEvent<never>) => void;
  /** Emitted when the checked state changes. */
  "onp-change"?: (e: CustomEvent<never>) => void;
  /** Emitted when the checkbox gains focus. */
  "onp-focus"?: (e: CustomEvent<never>) => void;
  /** Emitted when the checkbox receives input. */
  "onp-input"?: (e: CustomEvent<never>) => void;
  /** Emitted when the form control has been checked for validity and its constraints aren't satisfied. */
  "onp-invalid"?: (e: CustomEvent<never>) => void;
};

type PColorPickerProps = {
  /** The current value of the color picker. The value's format will vary based the `format` attribute. To get the value
in a specific format, use the `getFormattedValue()` method. The value is submitted as a name/value pair with form
data. */
  value?: PColorPicker["value"];
  /** The color picker's label. This will not be displayed, but it will be announced by assistive devices. If you need to
display HTML, you can use the `label` slot` instead. */
  label?: PColorPicker["label"];
  /** The format to use. If opacity is enabled, these will translate to HEXA, RGBA, HSLA, and HSVA respectively. The color
picker will accept user input in any format (including CSS color names) and convert it to the desired format. */
  format?: PColorPicker["format"];
  /** Renders the color picker inline rather than in a dropdown. */
  inline?: PColorPicker["inline"];
  /** Determines the size of the color picker's trigger. This has no effect on inline color pickers. */
  size?: PColorPicker["size"];
  /** Removes the button that lets users toggle between format. */
  "no-format-toggle"?: PColorPicker["noFormatToggle"];
  /** The name of the form control, submitted as a name/value pair with form data. */
  name?: PColorPicker["name"];
  /** Disables the color picker. */
  disabled?: PColorPicker["disabled"];
  /** Enable this option to prevent the panel from being clipped when the component is placed inside a container with
`overflow: auto|scroll`. Hoisting uses a fixed positioning strategy that works in many, but not all, scenarios. */
  hoist?: PColorPicker["hoist"];
  /** Shows the opacity slider. Enabling this will cause the formatted value to be HEXA, RGBA, or HSLA. */
  opacity?: PColorPicker["opacity"];
  /** By default, values are lowercase. With this attribute, values will be uppercase instead. */
  uppercase?: PColorPicker["uppercase"];
  /** One or more predefined color swatches to display as presets in the color picker. Can include any format the color
picker can parse, including HEX(A), RGB(A), HSL(A), HSV(A), and CSS color names. Each color must be separated by a
semicolon (`;`). Alternatively, you can pass an array of color values to this property using JavaScript. */
  swatches?: PColorPicker["swatches"];
  /** By default, form controls are associated with the nearest containing `<form>` element. This attribute allows you
to place the form control outside of a form and associate it with the form that has this `id`. The form must be in
the same document or shadow root for this to work. */
  form?: PColorPicker["form"];
  /** Makes the color picker a required field. */
  required?: PColorPicker["required"];
  /**  */
  base?: PColorPicker["base"];
  /**  */
  input?: PColorPicker["input"];
  /**  */
  dropdown?: PColorPicker["dropdown"];
  /**  */
  previewButton?: PColorPicker["previewButton"];
  /**  */
  trigger?: PColorPicker["trigger"];
  /** The default value of the form control. Primarily used for resetting the form control. */
  defaultValue?: PColorPicker["defaultValue"];
  /** Gets the validity state object */
  validity?: PColorPicker["validity"];
  /** Gets the validation message */
  validationMessage?: PColorPicker["validationMessage"];
  /** Emitted when the color picker loses focus. */
  "onp-blur"?: (e: CustomEvent<never>) => void;
  /** Emitted when the color picker's value changes. */
  "onp-change"?: (e: CustomEvent<never>) => void;
  /** Emitted when the color picker receives focus. */
  "onp-focus"?: (e: CustomEvent<never>) => void;
  /** Emitted when the color picker receives input. */
  "onp-input"?: (e: CustomEvent<never>) => void;
  /** Emitted when the form control has been checked for validity and its constraints aren't satisfied. */
  "onp-invalid"?: (e: CustomEvent<never>) => void;
};

type PCopyButtonProps = {
  /** The text value to copy. */
  value?: PCopyButton["value"];
  /** An id that references an element in the same document from which data will be copied. If both this and `value` are
present, this value will take precedence. By default, the target element's `textContent` will be copied. To copy an
attribute, append the attribute name wrapped in square brackets, e.g. `from="el[value]"`. To copy a property,
append a dot and the property name, e.g. `from="el.value"`. */
  from?: PCopyButton["from"];
  /** Disables the copy button. */
  disabled?: PCopyButton["disabled"];
  /** A custom label to show in the tooltip. */
  "copy-label"?: PCopyButton["copyLabel"];
  /** A custom label to show in the tooltip after copying. */
  "success-label"?: PCopyButton["successLabel"];
  /** A custom label to show in the tooltip when a copy error occurs. */
  "error-label"?: PCopyButton["errorLabel"];
  /** The length of time to show feedback before restoring the default trigger. */
  "feedback-duration"?: PCopyButton["feedbackDuration"];
  /** The preferred placement of the tooltip. */
  "tooltip-placement"?: PCopyButton["tooltipPlacement"];
  /** Enable this option to prevent the tooltip from being clipped when the component is placed inside a container with
`overflow: auto|hidden|scroll`. Hoisting uses a fixed positioning strategy that works in many, but not all,
scenarios. */
  hoist?: PCopyButton["hoist"];
  /**  */
  copyIcon?: PCopyButton["copyIcon"];
  /**  */
  successIcon?: PCopyButton["successIcon"];
  /**  */
  errorIcon?: PCopyButton["errorIcon"];
  /**  */
  tooltip?: PCopyButton["tooltip"];
  /**  */
  isCopying?: PCopyButton["isCopying"];
  /**  */
  status?: PCopyButton["status"];
  /** Emitted when the data has been copied. */
  "onp-copy"?: (e: CustomEvent<never>) => void;
  /** Emitted when the data could not be copied. */
  "onp-error"?: (e: CustomEvent<never>) => void;
};

type PDetailsProps = {
  /** Indicates whether or not the details is open. You can toggle this attribute to show and hide the details, or you
can use the `show()` and `hide()` methods and this attribute will reflect the details' open state. */
  open?: PDetails["open"];
  /** The summary to show in the header. If you need to display HTML, use the `summary` slot instead. */
  summary?: PDetails["summary"];
  /** Disables the details so it can't be toggled. */
  disabled?: PDetails["disabled"];
  /**  */
  details?: PDetails["details"];
  /**  */
  header?: PDetails["header"];
  /**  */
  body?: PDetails["body"];
  /**  */
  expandIconSlot?: PDetails["expandIconSlot"];
  /**  */
  detailsObserver?: PDetails["detailsObserver"];
  /** Emitted when the details opens. */
  "onp-show"?: (e: CustomEvent<never>) => void;
  /** Emitted after the details opens and all animations are complete. */
  "onp-after-show"?: (e: CustomEvent<never>) => void;
  /** Emitted when the details closes. */
  "onp-hide"?: (e: CustomEvent<never>) => void;
  /** Emitted after the details closes and all animations are complete. */
  "onp-after-hide"?: (e: CustomEvent<never>) => void;
};

type PDialogProps = {
  /** Indicates whether or not the dialog is open. You can toggle this attribute to show and hide the dialog, or you can
use the `show()` and `hide()` methods and this attribute will reflect the dialog's open state. */
  open?: PDialog["open"];
  /** The dialog's label as displayed in the header. You should always include a relevant label even when using
`no-header`, as it is required for proper accessibility. If you need to display HTML, use the `label` slot instead. */
  label?: PDialog["label"];
  /** Disables the header. This will also remove the default close button, so please ensure you provide an easy,
accessible way for users to dismiss the dialog. */
  "no-header"?: PDialog["noHeader"];
  /** Exposes the internal modal utility that controls focus trapping. To temporarily disable focus trapping and allow third-party modals spawned from an active Pure UI modal, call `modal.activateExternal()` when the third-party modal opens. Upon closing, call `modal.deactivateExternal()` to restore pure ui 's focus trapping. */
  modal?: PDialog["modal"];
  /**  */
  dialog?: PDialog["dialog"];
  /**  */
  panel?: PDialog["panel"];
  /**  */
  overlay?: PDialog["overlay"];
  /** Emitted when the dialog opens. */
  "onp-show"?: (e: CustomEvent<never>) => void;
  /** Emitted after the dialog opens and all animations are complete. */
  "onp-after-show"?: (e: CustomEvent<never>) => void;
  /** Emitted when the dialog closes. */
  "onp-hide"?: (e: CustomEvent<never>) => void;
  /** Emitted after the dialog closes and all animations are complete. */
  "onp-after-hide"?: (e: CustomEvent<never>) => void;
  /** Emitted when the dialog opens and is ready to receive focus. Calling `event.preventDefault()` will prevent focusing and allow you to set it on a different element, such as an input. */
  "onp-initial-focus"?: (e: CustomEvent<never>) => void;
  /** Emitted when the user attempts to close the dialog by clicking the close button, clicking the overlay, or pressing escape. Calling `event.preventDefault()` will keep the dialog open. Avoid using this unless closing the dialog will result in destructive behavior such as data loss. */
  "onp-request-close"?: (e: CustomEvent<{ source: "close-button" | "keyboard" | "overlay" }>) => void;
};

type PDividerProps = {
  /** Draws the divider in a vertical orientation. */
  vertical?: PDivider["vertical"];
};

type PDrawerProps = {
  /** Indicates whether or not the drawer is open. You can toggle this attribute to show and hide the drawer, or you can
use the `show()` and `hide()` methods and this attribute will reflect the drawer's open state. */
  open?: PDrawer["open"];
  /** The drawer's label as displayed in the header. You should always include a relevant label even when using
`no-header`, as it is required for proper accessibility. If you need to display HTML, use the `label` slot instead. */
  label?: PDrawer["label"];
  /** The direction from which the drawer will open. */
  placement?: PDrawer["placement"];
  /** By default, the drawer slides out of its containing block (usually the viewport). To make the drawer slide out of
its parent element, set this attribute and add `position: relative` to the parent. */
  contained?: PDrawer["contained"];
  /** Removes the header. This will also remove the default close button, so please ensure you provide an easy,
accessible way for users to dismiss the drawer. */
  "no-header"?: PDrawer["noHeader"];
  /** Exposes the internal modal utility that controls focus trapping. To temporarily disable focus trapping and allow third-party modals spawned from an active Shoelace modal, call `modal.activateExternal()` when the third-party modal opens. Upon closing, call `modal.deactivateExternal()` to restore pure ui 's focus trapping. */
  modal?: PDrawer["modal"];
  /**  */
  drawer?: PDrawer["drawer"];
  /**  */
  panel?: PDrawer["panel"];
  /**  */
  overlay?: PDrawer["overlay"];
  /** Emitted when the drawer opens. */
  "onp-show"?: (e: CustomEvent<never>) => void;
  /** Emitted after the drawer opens and all animations are complete. */
  "onp-after-show"?: (e: CustomEvent<never>) => void;
  /** Emitted when the drawer closes. */
  "onp-hide"?: (e: CustomEvent<never>) => void;
  /** Emitted after the drawer closes and all animations are complete. */
  "onp-after-hide"?: (e: CustomEvent<never>) => void;
  /** Emitted when the drawer opens and is ready to receive focus. Calling `event.preventDefault()` will prevent focusing and allow you to set it on a different element, such as an input. */
  "onp-initial-focus"?: (e: CustomEvent<never>) => void;
  /** Emitted when the user attempts to close the drawer by clicking the close button, clicking the overlay, or pressing escape. Calling `event.preventDefault()` will keep the drawer open. Avoid using this unless closing the drawer will result in destructive behavior such as data loss. */
  "onp-request-close"?: (e: CustomEvent<{ source: "close-button" | "keyboard" | "overlay" }>) => void;
};

type PDropdownProps = {
  /** Indicates whether or not the dropdown is open. You can toggle this attribute to show and hide the dropdown, or you
can use the `show()` and `hide()` methods and this attribute will reflect the dropdown's open state. */
  open?: PDropdown["open"];
  /** The preferred placement of the dropdown panel. Note that the actual placement may vary as needed to keep the panel
inside of the viewport. */
  placement?: PDropdown["placement"];
  /** Disables the dropdown so the panel will not open. */
  disabled?: PDropdown["disabled"];
  /** By default, the dropdown is closed when an item is selected. This attribute will keep it open instead. Useful for
dropdowns that allow for multiple interactions. */
  "stay-open-on-select"?: PDropdown["stayOpenOnSelect"];
  /** The distance in pixels from which to offset the panel away from its trigger. */
  distance?: PDropdown["distance"];
  /** The distance in pixels from which to offset the panel along its trigger. */
  skidding?: PDropdown["skidding"];
  /** Enable this option to prevent the panel from being clipped when the component is placed inside a container with
`overflow: auto|scroll`. Hoisting uses a fixed positioning strategy that works in many, but not all, scenarios. */
  hoist?: PDropdown["hoist"];
  /** Syncs the popup width or height to that of the trigger element. */
  sync?: PDropdown["sync"];
  /**  */
  popup?: PDropdown["popup"];
  /**  */
  trigger?: PDropdown["trigger"];
  /**  */
  panel?: PDropdown["panel"];
  /** The dropdown will close when the user interacts outside of this element (e.g. clicking). Useful for composing other
components that use a dropdown internally. */
  containingElement?: PDropdown["containingElement"];
  /** Emitted when the dropdown opens. */
  "onp-show"?: (e: CustomEvent<never>) => void;
  /** Emitted after the dropdown opens and all animations are complete. */
  "onp-after-show"?: (e: CustomEvent<never>) => void;
  /** Emitted when the dropdown closes. */
  "onp-hide"?: (e: CustomEvent<never>) => void;
  /** Emitted after the dropdown closes and all animations are complete. */
  "onp-after-hide"?: (e: CustomEvent<never>) => void;
};

type PFormatBytesProps = {
  /** The number to format in bytes. */
  value?: PFormatBytes["value"];
  /** The type of unit to display. */
  unit?: PFormatBytes["unit"];
  /** Determines how to display the result, e.g. "100 bytes", "100 b", or "100b". */
  display?: PFormatBytes["display"];
};

type PFormatDateProps = {
  /** The date/time to format. If not set, the current date and time will be used. When passing a string, it's strongly
recommended to use the ISO 8601 format to ensure timezones are handled correctly. To convert a date to this format
in JavaScript, use [`date.toISOString()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString). */
  date?: PFormatDate["date"];
  /** The format for displaying the weekday. */
  weekday?: PFormatDate["weekday"];
  /** The format for displaying the era. */
  era?: PFormatDate["era"];
  /** The format for displaying the year. */
  year?: PFormatDate["year"];
  /** The format for displaying the month. */
  month?: PFormatDate["month"];
  /** The format for displaying the day. */
  day?: PFormatDate["day"];
  /** The format for displaying the hour. */
  hour?: PFormatDate["hour"];
  /** The format for displaying the minute. */
  minute?: PFormatDate["minute"];
  /** The format for displaying the second. */
  second?: PFormatDate["second"];
  /** The format for displaying the time. */
  "time-zone-name"?: PFormatDate["timeZoneName"];
  /** The time zone to express the time in. */
  "time-zone"?: PFormatDate["timeZone"];
  /** The format for displaying the hour. */
  "hour-format"?: PFormatDate["hourFormat"];
};

type PFormatNumberProps = {
  /** The number to format. */
  value?: PFormatNumber["value"];
  /** The formatting style to use. */
  type?: PFormatNumber["type"];
  /** Turns off grouping separators. */
  "no-grouping"?: PFormatNumber["noGrouping"];
  /** The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code to use when formatting. */
  currency?: PFormatNumber["currency"];
  /** How to display the currency. */
  "currency-display"?: PFormatNumber["currencyDisplay"];
  /** The minimum number of integer digits to use. Possible values are 1-21. */
  "minimum-integer-digits"?: PFormatNumber["minimumIntegerDigits"];
  /** The minimum number of fraction digits to use. Possible values are 0-20. */
  "minimum-fraction-digits"?: PFormatNumber["minimumFractionDigits"];
  /** The maximum number of fraction digits to use. Possible values are 0-0. */
  "maximum-fraction-digits"?: PFormatNumber["maximumFractionDigits"];
  /** The minimum number of significant digits to use. Possible values are 1-21. */
  "minimum-significant-digits"?: PFormatNumber["minimumSignificantDigits"];
  /** The maximum number of significant digits to use,. Possible values are 1-21. */
  "maximum-significant-digits"?: PFormatNumber["maximumSignificantDigits"];
};

type PIconProps = {
  /** The name of the icon to draw. Available names depend on the icon library being used. */
  name?: PIcon["name"];
  /** An external URL of an SVG file. Be sure you trust the content you are including, as it will be executed as code and
can result in XSS attacks. */
  src?: PIcon["src"];
  /** An alternate description to use for assistive devices. If omitted, the icon will be considered presentational and
ignored by assistive devices. */
  label?: PIcon["label"];
  /** The name of a registered custom icon library. */
  library?: PIcon["library"];

  /** Emitted when the icon has loaded. When using `spriteSheet: true` this will not emit. */
  "onp-load"?: (e: CustomEvent<never>) => void;
  /** Emitted when the icon fails to load due to an error. When using `spriteSheet: true` this will not emit. */
  "onp-error"?: (e: CustomEvent<never>) => void;
};

type PIconButtonProps = {
  /** The name of the icon to draw. Available names depend on the icon library being used. */
  name?: PIconButton["name"];
  /** The name of a registered custom icon library. */
  library?: PIconButton["library"];
  /** An external URL of an SVG file. Be sure you trust the content you are including, as it will be executed as code and
can result in XSS attacks. */
  src?: PIconButton["src"];
  /** When set, the underlying button will be rendered as an `<a>` with this `href` instead of a `<button>`. */
  href?: PIconButton["href"];
  /** Tells the browser where to open the link. Only used when `href` is set. */
  target?: PIconButton["target"];
  /** Tells the browser to download the linked file as this filename. Only used when `href` is set. */
  download?: PIconButton["download"];
  /** A description that gets read by assistive devices. For optimal accessibility, you should always include a label
that describes what the icon button does. */
  label?: PIconButton["label"];
  /** Disables the button. */
  disabled?: PIconButton["disabled"];
  /**  */
  button?: PIconButton["button"];
  /** Emitted when the icon button loses focus. */
  "onp-blur"?: (e: CustomEvent<never>) => void;
  /** Emitted when the icon button gains focus. */
  "onp-focus"?: (e: CustomEvent<never>) => void;
};

type PImageComparerProps = {
  /** The position of the divider as a percentage. */
  position?: PImageComparer["position"];
  /**  */
  base?: PImageComparer["base"];
  /**  */
  handle?: PImageComparer["handle"];
  /** Emitted when the position changes. */
  "onp-change"?: (e: CustomEvent<never>) => void;
};

type PIncludeProps = {
  /** The location of the HTML file to include. Be sure you trust the content you are including as it will be executed as
code and can result in XSS attacks. */
  src?: PInclude["src"];
  /** The fetch mode to use. */
  mode?: PInclude["mode"];
  /** Allows included scripts to be executed. Be sure you trust the content you are including as it will be executed as
code and can result in XSS attacks. */
  "allow-scripts"?: PInclude["allowScripts"];

  /** Emitted when the included file is loaded. */
  "onp-load"?: (e: CustomEvent<never>) => void;
  /** Emitted when the included file fails to load due to an error. */
  "onp-error"?: (e: CustomEvent<{ status: number }>) => void;
};

type PInputProps = {
  /**  */
  title?: PInput["title"];
  /** The type of input. Works the same as a native `<input>` element, but only a subset of types are supported. Defaults
to `text`. */
  type?: PInput["type"];
  /** The name of the input, submitted as a name/value pair with form data. */
  name?: PInput["name"];
  /** The current value of the input, submitted as a name/value pair with form data. */
  value?: PInput["value"];
  /** The input's size. */
  size?: PInput["size"];
  /** Draws a filled input. */
  filled?: PInput["filled"];
  /** Draws a pill-style input with rounded edges. */
  pill?: PInput["pill"];
  /** The input's label. If you need to display HTML, use the `label` slot instead. */
  label?: PInput["label"];
  /** The input's help text. If you need to display HTML, use the `help-text` slot instead. */
  "help-text"?: PInput["helpText"];
  /** Adds a clear button when the input is not empty. */
  clearable?: PInput["clearable"];
  /** Disables the input. */
  disabled?: PInput["disabled"];
  /** Placeholder text to show as a hint when the input is empty. */
  placeholder?: PInput["placeholder"];
  /** Makes the input readonly. */
  readonly?: PInput["readonly"];
  /** Adds a button to toggle the password's visibility. Only applies to password types. */
  "password-toggle"?: PInput["passwordToggle"];
  /** Determines whether or not the password is currently visible. Only applies to password input types. */
  "password-visible"?: PInput["passwordVisible"];
  /** Hides the browser's built-in increment/decrement spin buttons for number inputs. */
  "no-spin-buttons"?: PInput["noSpinButtons"];
  /** By default, form controls are associated with the nearest containing `<form>` element. This attribute allows you
to place the form control outside of a form and associate it with the form that has this `id`. The form must be in
the same document or shadow root for this to work. */
  form?: PInput["form"];
  /** Makes the input a required field. */
  required?: PInput["required"];
  /** A regular expression pattern to validate input against. */
  pattern?: PInput["pattern"];
  /** The minimum length of input that will be considered valid. */
  minlength?: PInput["minlength"];
  /** The maximum length of input that will be considered valid. */
  maxlength?: PInput["maxlength"];
  /** The input's minimum value. Only applies to date and number input types. */
  min?: PInput["min"];
  /** The input's maximum value. Only applies to date and number input types. */
  max?: PInput["max"];
  /** Specifies the granularity that the value must adhere to, or the special value `any` which means no stepping is
implied, allowing any numeric value. Only applies to date and number input types. */
  step?: PInput["step"];
  /** Controls whether and how text input is automatically capitalized as it is entered by the user. */
  autocapitalize?: PInput["autocapitalize"];
  /** Indicates whether the browser's autocorrect feature is on or off. */
  autocorrect?: PInput["autocorrect"];
  /** Specifies what permission the browser has to provide assistance in filling out form field values. Refer to
[this page on MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete) for available values. */
  autocomplete?: PInput["autocomplete"];
  /** Indicates that the input should receive focus on page load. */
  autofocus?: PInput["autofocus"];
  /** Used to customize the label or icon of the Enter key on virtual keyboards. */
  enterkeyhint?: PInput["enterkeyhint"];
  /** Enables spell checking on the input. */
  spellcheck?: PInput["spellcheck"];
  /** Tells the browser what type of data will be entered by the user, allowing it to display the appropriate virtual
keyboard on supportive devices. */
  inputmode?: PInput["inputmode"];
  /**  */
  input?: PInput["input"];
  /** The default value of the form control. Primarily used for resetting the form control. */
  defaultValue?: PInput["defaultValue"];
  /** Gets or sets the current value as a `Date` object. Returns `null` if the value can't be converted. This will use the native `<input type="{{type}}">` implementation and may result in an error. */
  valueAsDate?: PInput["valueAsDate"];
  /** Gets or sets the current value as a number. Returns `NaN` if the value can't be converted. */
  valueAsNumber?: PInput["valueAsNumber"];
  /** Gets the validity state object */
  validity?: PInput["validity"];
  /** Gets the validation message */
  validationMessage?: PInput["validationMessage"];
  /** Emitted when the control loses focus. */
  "onp-blur"?: (e: CustomEvent<never>) => void;
  /** Emitted when an alteration to the control's value is committed by the user. */
  "onp-change"?: (e: CustomEvent<never>) => void;
  /** Emitted when the clear button is activated. */
  "onp-clear"?: (e: CustomEvent<never>) => void;
  /** Emitted when the control gains focus. */
  "onp-focus"?: (e: CustomEvent<never>) => void;
  /** Emitted when the control receives input. */
  "onp-input"?: (e: CustomEvent<never>) => void;
  /** Emitted when the form control has been checked for validity and its constraints aren't satisfied. */
  "onp-invalid"?: (e: CustomEvent<never>) => void;
};

type PMenuProps = {
  /**  */
  defaultSlot?: PMenu["defaultSlot"];
  /** Emitted when a menu item is selected. */
  "onp-select"?: (e: CustomEvent<{ item: PMenuItem }>) => void;
};

type PMenuItemProps = {
  /** The type of menu item to render. To use `checked`, this value must be set to `checkbox`. */
  type?: PMenuItem["type"];
  /** Draws the item in a checked state. */
  checked?: PMenuItem["checked"];
  /** A unique value to store in the menu item. This can be used as a way to identify menu items when selected. */
  value?: PMenuItem["value"];
  /** Draws the menu item in a loading state. */
  loading?: PMenuItem["loading"];
  /** Draws the menu item in a disabled state, preventing selection. */
  disabled?: PMenuItem["disabled"];
  /**  */
  defaultSlot?: PMenuItem["defaultSlot"];
  /**  */
  menuItem?: PMenuItem["menuItem"];
};

type PMenuLabelProps = {};

type PMutationObserverProps = {
  /** Watches for changes to attributes. To watch only specific attributes, separate them by a space, e.g.
`attr="class id title"`. To watch all attributes, use `*`. */
  attr?: PMutationObserver["attr"];
  /** Indicates whether or not the attribute's previous value should be recorded when monitoring changes. */
  "attr-old-value"?: PMutationObserver["attrOldValue"];
  /** Watches for changes to the character data contained within the node. */
  "char-data"?: PMutationObserver["charData"];
  /** Indicates whether or not the previous value of the node's text should be recorded. */
  "char-data-old-value"?: PMutationObserver["charDataOldValue"];
  /** Watches for the addition or removal of new child nodes. */
  "child-list"?: PMutationObserver["childList"];
  /** Disables the observer. */
  disabled?: PMutationObserver["disabled"];

  /** Emitted when a mutation occurs. */
  "onp-mutation"?: (e: CustomEvent<{ mutationList: MutationRecord[] }>) => void;
};

type POptionProps = {
  /** The option's value. When selected, the containing form control will receive this value. The value must be unique
from other options in the same group. Values may not contain spaces, as spaces are used as delimiters when listing
multiple values. */
  value?: POption["value"];
  /** Draws the option in a disabled state, preventing selection. */
  disabled?: POption["disabled"];
  /**  */
  defaultSlot?: POption["defaultSlot"];
  /**  */
  current?: POption["current"];
  /**  */
  selected?: POption["selected"];
  /**  */
  hasHover?: POption["hasHover"];
};

type PPopupProps = {
  /** The element the popup will be anchored to. If the anchor lives outside of the popup, you can provide the anchor
element `id`, a DOM element reference, or a `VirtualElement`. If the anchor lives inside the popup, use the
`anchor` slot instead. */
  anchor?: PPopup["anchor"];
  /** Activates the positioning logic and shows the popup. When this attribute is removed, the positioning logic is torn
down and the popup will be hidden. */
  active?: PPopup["active"];
  /** The preferred placement of the popup. Note that the actual placement will vary as configured to keep the
panel inside of the viewport. */
  placement?: PPopup["placement"];
  /** Determines how the popup is positioned. The `absolute` strategy works well in most cases, but if overflow is
clipped, using a `fixed` position strategy can often workaround it. */
  strategy?: PPopup["strategy"];
  /** The distance in pixels from which to offset the panel away from its anchor. */
  distance?: PPopup["distance"];
  /** The distance in pixels from which to offset the panel along its anchor. */
  skidding?: PPopup["skidding"];
  /** Attaches an arrow to the popup. The arrow's size and color can be customized using the `--arrow-size` and
`--arrow-color` custom properties. For additional customizations, you can also target the arrow using
`::part(arrow)` in your stylesheet. */
  arrow?: PPopup["arrow"];
  /** The placement of the arrow. The default is `anchor`, which will align the arrow as close to the center of the
anchor as possible, considering available space and `arrow-padding`. A value of `start`, `end`, or `center` will
align the arrow to the start, end, or center of the popover instead. */
  "arrow-placement"?: PPopup["arrowPlacement"];
  /** The amount of padding between the arrow and the edges of the popup. If the popup has a border-radius, for example,
this will prevent it from overflowing the corners. */
  "arrow-padding"?: PPopup["arrowPadding"];
  /** When set, placement of the popup will flip to the opposite site to keep it in view. You can use
`flipFallbackPlacements` to further configure how the fallback placement is determined. */
  flip?: PPopup["flip"];
  /** If the preferred placement doesn't fit, popup will be tested in these fallback placements until one fits. Must be a
string of any number of placements separated by a space, e.g. "top bottom left". If no placement fits, the flip
fallback strategy will be used instead. */
  "flip-fallback-placements"?: PPopup["flipFallbackPlacements"];
  /** When neither the preferred placement nor the fallback placements fit, this value will be used to determine whether
the popup should be positioned using the best available fit based on available space or as it was initially
preferred. */
  "flip-fallback-strategy"?: PPopup["flipFallbackStrategy"];
  /** The flip boundary describes clipping element(s) that overflow will be checked relative to when flipping. By
default, the boundary includes overflow ancestors that will cause the element to be clipped. If needed, you can
change the boundary by passing a reference to one or more elements to this property. */
  flipBoundary?: PPopup["flipBoundary"];
  /** The amount of padding, in pixels, to exceed before the flip behavior will occur. */
  "flip-padding"?: PPopup["flipPadding"];
  /** Moves the popup along the axis to keep it in view when clipped. */
  shift?: PPopup["shift"];
  /** The shift boundary describes clipping element(s) that overflow will be checked relative to when shifting. By
default, the boundary includes overflow ancestors that will cause the element to be clipped. If needed, you can
change the boundary by passing a reference to one or more elements to this property. */
  shiftBoundary?: PPopup["shiftBoundary"];
  /** The amount of padding, in pixels, to exceed before the shift behavior will occur. */
  "shift-padding"?: PPopup["shiftPadding"];
  /** When set, this will cause the popup to automatically resize itself to prevent it from overflowing. */
  "auto-size"?: PPopup["autoSize"];
  /** Syncs the popup's width or height to that of the anchor element. */
  sync?: PPopup["sync"];
  /** The auto-size boundary describes clipping element(s) that overflow will be checked relative to when resizing. By
default, the boundary includes overflow ancestors that will cause the element to be clipped. If needed, you can
change the boundary by passing a reference to one or more elements to this property. */
  autoSizeBoundary?: PPopup["autoSizeBoundary"];
  /** The amount of padding, in pixels, to exceed before the auto-size behavior will occur. */
  "auto-size-padding"?: PPopup["autoSizePadding"];
  /** When a gap exists between the anchor and the popup element, this option will add a "hover bridge" that fills the
gap using an invisible element. This makes listening for events such as `mouseenter` and `mouseleave` more sane
because the pointer never technically leaves the element. The hover bridge will only be drawn when the popover is
active. */
  "hover-bridge"?: PPopup["hoverBridge"];
  /** A reference to the internal popup container. Useful for animating and styling the popup with JavaScript. */
  popup?: PPopup["popup"];
  /** Emitted when the popup is repositioned. This event can fire a lot, so avoid putting expensive operations in your listener or consider debouncing it. */
  "onp-reposition"?: (e: CustomEvent<never>) => void;
};

type PProgressBarProps = {
  /** The current progress as a percentage, 0 to 100. */
  value?: PProgressBar["value"];
  /** When true, percentage is ignored, the label is hidden, and the progress bar is drawn in an indeterminate state. */
  indeterminate?: PProgressBar["indeterminate"];
  /** A custom label for assistive devices. */
  label?: PProgressBar["label"];
};

type PProgressRingProps = {
  /** The current progress as a percentage, 0 to 100. */
  value?: PProgressRing["value"];
  /** A custom label for assistive devices. */
  label?: PProgressRing["label"];
  /**  */
  indicator?: PProgressRing["indicator"];
  /**  */
  indicatorOffset?: PProgressRing["indicatorOffset"];
};

type PQrCodeProps = {
  /** The QR code's value. */
  value?: PQrCode["value"];
  /** The label for assistive devices to announce. If unspecified, the value will be used instead. */
  label?: PQrCode["label"];
  /** The size of the QR code, in pixels. */
  size?: PQrCode["size"];
  /** The fill color. This can be any valid CSS color, but not a CSS custom property. */
  fill?: PQrCode["fill"];
  /** The background color. This can be any valid CSS color or `transparent`. It cannot be a CSS custom property. */
  background?: PQrCode["background"];
  /** The edge radius of each module. Must be between 0 and 0.5. */
  radius?: PQrCode["radius"];
  /** The level of error correction to use. [Learn more](https://www.qrcode.com/en/about/error_correction.html) */
  "error-correction"?: PQrCode["errorCorrection"];
  /**  */
  canvas?: PQrCode["canvas"];
};

type PRadioProps = {
  /** The radio's value. When selected, the radio group will receive this value. */
  value?: PRadio["value"];
  /** The radio's size. When used inside a radio group, the size will be determined by the radio group's size so this
attribute can typically be omitted. */
  size?: PRadio["size"];
  /** Disables the radio. */
  disabled?: PRadio["disabled"];
  /**  */
  checked?: PRadio["checked"];
  /** Emitted when the control loses focus. */
  "onp-blur"?: (e: CustomEvent<never>) => void;
  /** Emitted when the control gains focus. */
  "onp-focus"?: (e: CustomEvent<never>) => void;
};

type PRadioButtonProps = {
  /** The radio's value. When selected, the radio group will receive this value. */
  value?: PRadioButton["value"];
  /** Disables the radio button. */
  disabled?: PRadioButton["disabled"];
  /** The radio button's size. When used inside a radio group, the size will be determined by the radio group's size so
this attribute can typically be omitted. */
  size?: PRadioButton["size"];
  /** Draws a pill-style radio button with rounded edges. */
  pill?: PRadioButton["pill"];
  /**  */
  input?: PRadioButton["input"];
  /**  */
  hiddenInput?: PRadioButton["hiddenInput"];
  /** Emitted when the button loses focus. */
  "onp-blur"?: (e: CustomEvent<never>) => void;
  /** Emitted when the button gains focus. */
  "onp-focus"?: (e: CustomEvent<never>) => void;
};

type PRadioGroupProps = {
  /** The radio group's label. Required for proper accessibility. If you need to display HTML, use the `label` slot
instead. */
  label?: PRadioGroup["label"];
  /** The radio groups's help text. If you need to display HTML, use the `help-text` slot instead. */
  "help-text"?: PRadioGroup["helpText"];
  /** The name of the radio group, submitted as a name/value pair with form data. */
  name?: PRadioGroup["name"];
  /** The current value of the radio group, submitted as a name/value pair with form data. */
  value?: PRadioGroup["value"];
  /** The radio group's size. This size will be applied to all child radios and radio buttons. */
  size?: PRadioGroup["size"];
  /** By default, form controls are associated with the nearest containing `<form>` element. This attribute allows you
to place the form control outside of a form and associate it with the form that has this `id`. The form must be in
the same document or shadow root for this to work. */
  form?: PRadioGroup["form"];
  /** Ensures a child radio is checked before allowing the containing form to submit. */
  required?: PRadioGroup["required"];
  /**  */
  defaultSlot?: PRadioGroup["defaultSlot"];
  /**  */
  validationInput?: PRadioGroup["validationInput"];
  /**  */
  defaultValue?: PRadioGroup["defaultValue"];
  /** Gets the validity state object */
  validity?: PRadioGroup["validity"];
  /** Gets the validation message */
  validationMessage?: PRadioGroup["validationMessage"];
  /** Emitted when the radio group's selected value changes. */
  "onp-change"?: (e: CustomEvent<never>) => void;
  /** Emitted when the radio group receives user input. */
  "onp-input"?: (e: CustomEvent<never>) => void;
  /** Emitted when the form control has been checked for validity and its constraints aren't satisfied. */
  "onp-invalid"?: (e: CustomEvent<never>) => void;
};

type PRatingProps = {
  /** A label that describes the rating to assistive devices. */
  label?: PRating["label"];
  /** The current rating. */
  value?: PRating["value"];
  /** The highest rating to show. */
  max?: PRating["max"];
  /** The precision at which the rating will increase and decrease. For example, to allow half-star ratings, set this
attribute to `0.5`. */
  precision?: PRating["precision"];
  /** Makes the rating readonly. */
  readonly?: PRating["readonly"];
  /** Disables the rating. */
  disabled?: PRating["disabled"];
  /** A function that customizes the symbol to be rendered. The first and only argument is the rating's current value.
The function should return a string containing trusted HTML of the symbol to render at the specified value. Works
well with `<p-icon>` elements. */
  getSymbol?: PRating["getSymbol"];
  /**  */
  rating?: PRating["rating"];
  /** Emitted when the rating's value changes. */
  "onp-change"?: (e: CustomEvent<never>) => void;
  /** Emitted when the user hovers over a value. The `phase` property indicates when hovering starts, moves to a new value, or ends. The `value` property tells what the rating's value would be if the user were to commit to the hovered value. */
  "onp-hover"?: (e: CustomEvent<{ phase: "start" | "move" | "end"; value: number }>) => void;
};

type PRelativeTimeProps = {
  /** The date from which to calculate time from. If not set, the current date and time will be used. When passing a
string, it's strongly recommended to use the ISO 8601 format to ensure timezones are handled correctly. To convert
a date to this format in JavaScript, use [`date.toISOString()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString). */
  date?: PRelativeTime["date"];
  /** The formatting style to use. */
  format?: PRelativeTime["format"];
  /** When `auto`, values such as "yesterday" and "tomorrow" will be shown when possible. When `always`, values such as
"1 day ago" and "in 1 day" will be shown. */
  numeric?: PRelativeTime["numeric"];
  /** Keep the displayed value up to date as time passes. */
  sync?: PRelativeTime["sync"];
};

type PRangeProps = {
  /**  */
  title?: PRange["title"];
  /** The name of the range, submitted as a name/value pair with form data. */
  name?: PRange["name"];
  /** The current value of the range, submitted as a name/value pair with form data. */
  value?: PRange["value"];
  /** The range's label. If you need to display HTML, use the `label` slot instead. */
  label?: PRange["label"];
  /** The range's help text. If you need to display HTML, use the help-text slot instead. */
  "help-text"?: PRange["helpText"];
  /** Disables the range. */
  disabled?: PRange["disabled"];
  /** The minimum acceptable value of the range. */
  min?: PRange["min"];
  /** The maximum acceptable value of the range. */
  max?: PRange["max"];
  /** The interval at which the range will increase and decrease. */
  step?: PRange["step"];
  /** The preferred placement of the range's tooltip. */
  tooltip?: PRange["tooltip"];
  /** By default, form controls are associated with the nearest containing `<form>` element. This attribute allows you
to place the form control outside of a form and associate it with the form that has this `id`. The form must be in
the same document or shadow root for this to work. */
  form?: PRange["form"];
  /**  */
  input?: PRange["input"];
  /**  */
  output?: PRange["output"];
  /** A function used to format the tooltip's value. The range's value is passed as the first and only argument. The
function should return a string to display in the tooltip. */
  tooltipFormatter?: PRange["tooltipFormatter"];
  /** The default value of the form control. Primarily used for resetting the form control. */
  defaultValue?: PRange["defaultValue"];
  /** Gets the validity state object */
  validity?: PRange["validity"];
  /** Gets the validation message */
  validationMessage?: PRange["validationMessage"];
  /** Emitted when the control loses focus. */
  "onp-blur"?: (e: CustomEvent<never>) => void;
  /** Emitted when an alteration to the control's value is committed by the user. */
  "onp-change"?: (e: CustomEvent<never>) => void;
  /** Emitted when the control gains focus. */
  "onp-focus"?: (e: CustomEvent<never>) => void;
  /** Emitted when the control receives input. */
  "onp-input"?: (e: CustomEvent<never>) => void;
  /** Emitted when the form control has been checked for validity and its constraints aren't satisfied. */
  "onp-invalid"?: (e: CustomEvent<never>) => void;
};

type PResizeObserverProps = {
  /** Disables the observer. */
  disabled?: PResizeObserver["disabled"];

  /** Emitted when the element is resized. */
  "onp-resize"?: (e: CustomEvent<{ entries: ResizeObserverEntry[] }>) => void;
};

type PSelectProps = {
  /** The name of the select, submitted as a name/value pair with form data. */
  name?: PSelect["name"];
  /** The current value of the select, submitted as a name/value pair with form data. When `multiple` is enabled, the
value attribute will be a space-delimited list of values based on the options selected, and the value property will
be an array. **For this reason, values must not contain spaces.** */
  value?: PSelect["value"];
  /** The select's size. */
  size?: PSelect["size"];
  /** Placeholder text to show as a hint when the select is empty. */
  placeholder?: PSelect["placeholder"];
  /** Allows more than one option to be selected. */
  multiple?: PSelect["multiple"];
  /** The maximum number of selected options to show when `multiple` is true. After the maximum, "+n" will be shown to
indicate the number of additional items that are selected. Set to 0 to remove the limit. */
  "max-options-visible"?: PSelect["maxOptionsVisible"];
  /** Disables the select control. */
  disabled?: PSelect["disabled"];
  /** Adds a clear button when the select is not empty. */
  clearable?: PSelect["clearable"];
  /** Indicates whether or not the select is open. You can toggle this attribute to show and hide the menu, or you can
use the `show()` and `hide()` methods and this attribute will reflect the select's open state. */
  open?: PSelect["open"];
  /** Enable this option to prevent the listbox from being clipped when the component is placed inside a container with
`overflow: auto|scroll`. Hoisting uses a fixed positioning strategy that works in many, but not all, scenarios. */
  hoist?: PSelect["hoist"];
  /** Draws a filled select. */
  filled?: PSelect["filled"];
  /** Draws a pill-style select with rounded edges. */
  pill?: PSelect["pill"];
  /** The select's label. If you need to display HTML, use the `label` slot instead. */
  label?: PSelect["label"];
  /** The preferred placement of the select's menu. Note that the actual placement may vary as needed to keep the listbox
inside of the viewport. */
  placement?: PSelect["placement"];
  /** The select's help text. If you need to display HTML, use the `help-text` slot instead. */
  "help-text"?: PSelect["helpText"];
  /** By default, form controls are associated with the nearest containing `<form>` element. This attribute allows you
to place the form control outside of a form and associate it with the form that has this `id`. The form must be in
the same document or shadow root for this to work. */
  form?: PSelect["form"];
  /** The select's required attribute. */
  required?: PSelect["required"];
  /** A function that customizes the tags to be rendered when multiple=true. The first argument is the option, the second
is the current tag's index.  The function should return either a Lit TemplateResult or a string containing trusted HTML of the symbol to render at
the specified value. */
  getTag?: PSelect["getTag"];
  /**  */
  popup?: PSelect["popup"];
  /**  */
  combobox?: PSelect["combobox"];
  /**  */
  displayInput?: PSelect["displayInput"];
  /**  */
  valueInput?: PSelect["valueInput"];
  /**  */
  listbox?: PSelect["listbox"];
  /**  */
  displayLabel?: PSelect["displayLabel"];
  /**  */
  currentOption?: PSelect["currentOption"];
  /**  */
  selectedOptions?: PSelect["selectedOptions"];
  /** The default value of the form control. Primarily used for resetting the form control. */
  defaultValue?: PSelect["defaultValue"];
  /** Gets the validity state object */
  validity?: PSelect["validity"];
  /** Gets the validation message */
  validationMessage?: PSelect["validationMessage"];
  /** Emitted when the control's value changes. */
  "onp-change"?: (e: CustomEvent<never>) => void;
  /** Emitted when the control's value is cleared. */
  "onp-clear"?: (e: CustomEvent<never>) => void;
  /** Emitted when the control receives input. */
  "onp-input"?: (e: CustomEvent<never>) => void;
  /** Emitted when the control gains focus. */
  "onp-focus"?: (e: CustomEvent<never>) => void;
  /** Emitted when the control loses focus. */
  "onp-blur"?: (e: CustomEvent<never>) => void;
  /** Emitted when the select's menu opens. */
  "onp-show"?: (e: CustomEvent<never>) => void;
  /** Emitted after the select's menu opens and all animations are complete. */
  "onp-after-show"?: (e: CustomEvent<never>) => void;
  /** Emitted when the select's menu closes. */
  "onp-hide"?: (e: CustomEvent<never>) => void;
  /** Emitted after the select's menu closes and all animations are complete. */
  "onp-after-hide"?: (e: CustomEvent<never>) => void;
  /** Emitted when the form control has been checked for validity and its constraints aren't satisfied. */
  "onp-invalid"?: (e: CustomEvent<never>) => void;
};

type PSkeletonProps = {
  /** Determines which effect the skeleton will use. */
  effect?: PSkeleton["effect"];
};

type PSpinnerProps = {};

type PSplitPanelProps = {
  /** The current position of the divider from the primary panel's edge as a percentage 0-100. Defaults to 50% of the
container's initial size. */
  position?: PSplitPanel["position"];
  /** The current position of the divider from the primary panel's edge in pixels. */
  "position-in-pixels"?: PSplitPanel["positionInPixels"];
  /** Draws the split panel in a vertical orientation with the start and end panels stacked. */
  vertical?: PSplitPanel["vertical"];
  /** Disables resizing. Note that the position may still change as a result of resizing the host element. */
  disabled?: PSplitPanel["disabled"];
  /** If no primary panel is designated, both panels will resize proportionally when the host element is resized. If a
primary panel is designated, it will maintain its size and the other panel will grow or shrink as needed when the
host element is resized. */
  primary?: PSplitPanel["primary"];
  /** One or more space-separated values at which the divider should snap. Values can be in pixels or percentages, e.g.
`"100px 50%"`. */
  snap?: PSplitPanel["snap"];
  /** How close the divider must be to a snap point until snapping occurs. */
  "snap-threshold"?: PSplitPanel["snapThreshold"];
  /**  */
  divider?: PSplitPanel["divider"];
  /** Emitted when the divider's position changes. */
  "onp-reposition"?: (e: CustomEvent<never>) => void;
};

type PSwitchProps = {
  /**  */
  title?: PSwitch["title"];
  /** The name of the switch, submitted as a name/value pair with form data. */
  name?: PSwitch["name"];
  /** The current value of the switch, submitted as a name/value pair with form data. */
  value?: PSwitch["value"];
  /** The switch's size. */
  size?: PSwitch["size"];
  /** Disables the switch. */
  disabled?: PSwitch["disabled"];
  /** Draws the switch in a checked state. */
  checked?: PSwitch["checked"];
  /** By default, form controls are associated with the nearest containing `<form>` element. This attribute allows you
to place the form control outside of a form and associate it with the form that has this `id`. The form must be in
the same document or shadow root for this to work. */
  form?: PSwitch["form"];
  /** Makes the switch a required field. */
  required?: PSwitch["required"];
  /** The switch's help text. If you need to display HTML, use the `help-text` slot instead. */
  "help-text"?: PSwitch["helpText"];
  /**  */
  input?: PSwitch["input"];
  /** The default value of the form control. Primarily used for resetting the form control. */
  defaultChecked?: PSwitch["defaultChecked"];
  /** Gets the validity state object */
  validity?: PSwitch["validity"];
  /** Gets the validation message */
  validationMessage?: PSwitch["validationMessage"];
  /** Emitted when the control loses focus. */
  "onp-blur"?: (e: CustomEvent<never>) => void;
  /** Emitted when the control's checked state changes. */
  "onp-change"?: (e: CustomEvent<never>) => void;
  /** Emitted when the control receives input. */
  "onp-input"?: (e: CustomEvent<never>) => void;
  /** Emitted when the control gains focus. */
  "onp-focus"?: (e: CustomEvent<never>) => void;
  /** Emitted when the form control has been checked for validity and its constraints aren't satisfied. */
  "onp-invalid"?: (e: CustomEvent<never>) => void;
};

type PTabProps = {
  /** The name of the tab panel this tab is associated with. The panel must be located in the same tab group. */
  panel?: PTab["panel"];
  /** Draws the tab in an active state. */
  active?: PTab["active"];
  /** Makes the tab closable and shows a close button. */
  closable?: PTab["closable"];
  /** Disables the tab and prevents selection. */
  disabled?: PTab["disabled"];
  /**  */
  tab?: PTab["tab"];
  /** Emitted when the tab is closable and the close button is activated. */
  "onp-close"?: (e: CustomEvent<never>) => void;
};

type PTabGroupProps = {
  /** The placement of the tabs. */
  placement?: PTabGroup["placement"];
  /** When set to auto, navigating tabs with the arrow keys will instantly show the corresponding tab panel. When set to
manual, the tab will receive focus but will not show until the user presses spacebar or enter. */
  activation?: PTabGroup["activation"];
  /** Disables the scroll arrows that appear when tabs overflow. */
  "no-scroll-controls"?: PTabGroup["noScrollControls"];
  /**  */
  tabGroup?: PTabGroup["tabGroup"];
  /**  */
  body?: PTabGroup["body"];
  /**  */
  nav?: PTabGroup["nav"];
  /**  */
  indicator?: PTabGroup["indicator"];
  /** Emitted when a tab is shown. */
  "onp-tab-show"?: (e: CustomEvent<{ name: String }>) => void;
  /** Emitted when a tab is hidden. */
  "onp-tab-hide"?: (e: CustomEvent<{ name: String }>) => void;
};

type PTabPanelProps = {
  /** The tab panel's name. */
  name?: PTabPanel["name"];
  /** When true, the tab panel will be shown. */
  active?: PTabPanel["active"];
};

type PTagProps = {
  /** The tag's theme variant. */
  variant?: PTag["variant"];
  /** The tag's size. */
  size?: PTag["size"];
  /** Draws a pill-style tag with rounded edges. */
  pill?: PTag["pill"];
  /** Makes the tag removable and shows a remove button. */
  removable?: PTag["removable"];

  /** Emitted when the remove button is activated. */
  "onp-remove"?: (e: CustomEvent<never>) => void;
};

type PTextareaProps = {
  /**  */
  title?: PTextarea["title"];
  /** The name of the textarea, submitted as a name/value pair with form data. */
  name?: PTextarea["name"];
  /** The current value of the textarea, submitted as a name/value pair with form data. */
  value?: PTextarea["value"];
  /** The textarea's size. */
  size?: PTextarea["size"];
  /** Draws a filled textarea. */
  filled?: PTextarea["filled"];
  /** The textarea's label. If you need to display HTML, use the `label` slot instead. */
  label?: PTextarea["label"];
  /** The textarea's help text. If you need to display HTML, use the `help-text` slot instead. */
  "help-text"?: PTextarea["helpText"];
  /** Placeholder text to show as a hint when the input is empty. */
  placeholder?: PTextarea["placeholder"];
  /** The number of rows to display by default. */
  rows?: PTextarea["rows"];
  /** Controls how the textarea can be resized. */
  resize?: PTextarea["resize"];
  /** Disables the textarea. */
  disabled?: PTextarea["disabled"];
  /** Makes the textarea readonly. */
  readonly?: PTextarea["readonly"];
  /** By default, form controls are associated with the nearest containing `<form>` element. This attribute allows you
to place the form control outside of a form and associate it with the form that has this `id`. The form must be in
the same document or shadow root for this to work. */
  form?: PTextarea["form"];
  /** Makes the textarea a required field. */
  required?: PTextarea["required"];
  /** The minimum length of input that will be considered valid. */
  minlength?: PTextarea["minlength"];
  /** The maximum length of input that will be considered valid. */
  maxlength?: PTextarea["maxlength"];
  /** Controls whether and how text input is automatically capitalized as it is entered by the user. */
  autocapitalize?: PTextarea["autocapitalize"];
  /** Indicates whether the browser's autocorrect feature is on or off. */
  autocorrect?: PTextarea["autocorrect"];
  /** Specifies what permission the browser has to provide assistance in filling out form field values. Refer to
[this page on MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete) for available values. */
  autocomplete?: PTextarea["autocomplete"];
  /** Indicates that the input should receive focus on page load. */
  autofocus?: PTextarea["autofocus"];
  /** Used to customize the label or icon of the Enter key on virtual keyboards. */
  enterkeyhint?: PTextarea["enterkeyhint"];
  /** Enables spell checking on the textarea. */
  spellcheck?: PTextarea["spellcheck"];
  /** Tells the browser what type of data will be entered by the user, allowing it to display the appropriate virtual
keyboard on supportive devices. */
  inputmode?: PTextarea["inputmode"];
  /**  */
  input?: PTextarea["input"];
  /** The default value of the form control. Primarily used for resetting the form control. */
  defaultValue?: PTextarea["defaultValue"];
  /** Gets the validity state object */
  validity?: PTextarea["validity"];
  /** Gets the validation message */
  validationMessage?: PTextarea["validationMessage"];
  /** Emitted when the control loses focus. */
  "onp-blur"?: (e: CustomEvent<never>) => void;
  /** Emitted when an alteration to the control's value is committed by the user. */
  "onp-change"?: (e: CustomEvent<never>) => void;
  /** Emitted when the control gains focus. */
  "onp-focus"?: (e: CustomEvent<never>) => void;
  /** Emitted when the control receives input. */
  "onp-input"?: (e: CustomEvent<never>) => void;
  /** Emitted when the form control has been checked for validity and its constraints aren't satisfied. */
  "onp-invalid"?: (e: CustomEvent<never>) => void;
};

type PTooltipProps = {
  /** The tooltip's content. If you need to display HTML, use the `content` slot instead. */
  content?: PTooltip["content"];
  /** The preferred placement of the tooltip. Note that the actual placement may vary as needed to keep the tooltip
inside of the viewport. */
  placement?: PTooltip["placement"];
  /** Disables the tooltip so it won't show when triggered. */
  disabled?: PTooltip["disabled"];
  /** The distance in pixels from which to offset the tooltip away from its target. */
  distance?: PTooltip["distance"];
  /** Indicates whether or not the tooltip is open. You can use this in lieu of the show/hide methods. */
  open?: PTooltip["open"];
  /** The distance in pixels from which to offset the tooltip along its target. */
  skidding?: PTooltip["skidding"];
  /** Controls how the tooltip is activated. Possible options include `click`, `hover`, `focus`, and `manual`. Multiple
options can be passed by separating them with a space. When manual is used, the tooltip must be activated
programmatically. */
  trigger?: PTooltip["trigger"];
  /** Enable this option to prevent the tooltip from being clipped when the component is placed inside a container with
`overflow: auto|hidden|scroll`. Hoisting uses a fixed positioning strategy that works in many, but not all,
scenarios. */
  hoist?: PTooltip["hoist"];
  /**  */
  defaultSlot?: PTooltip["defaultSlot"];
  /**  */
  body?: PTooltip["body"];
  /**  */
  popup?: PTooltip["popup"];
  /** Emitted when the tooltip begins to show. */
  "onp-show"?: (e: CustomEvent<never>) => void;
  /** Emitted after the tooltip has shown and all animations are complete. */
  "onp-after-show"?: (e: CustomEvent<never>) => void;
  /** Emitted when the tooltip begins to hide. */
  "onp-hide"?: (e: CustomEvent<never>) => void;
  /** Emitted after the tooltip has hidden and all animations are complete. */
  "onp-after-hide"?: (e: CustomEvent<never>) => void;
};

type PTreeProps = {
  /** The selection behavior of the tree. Single selection allows only one node to be selected at a time. Multiple
displays checkboxes and allows more than one node to be selected. Leaf allows only leaf nodes to be selected. */
  selection?: PTree["selection"];
  /**  */
  defaultSlot?: PTree["defaultSlot"];
  /**  */
  expandedIconSlot?: PTree["expandedIconSlot"];
  /**  */
  collapsedIconSlot?: PTree["collapsedIconSlot"];
  /** Emitted when a tree item is selected or deselected. */
  "onp-selection-change"?: (e: CustomEvent<{ selection: PTreeItem[] }>) => void;
};

type PTreeItemProps = {
  /** Expands the tree item. */
  expanded?: PTreeItem["expanded"];
  /** Draws the tree item in a selected state. */
  selected?: PTreeItem["selected"];
  /** Disables the tree item. */
  disabled?: PTreeItem["disabled"];
  /** Enables lazy loading behavior. */
  lazy?: PTreeItem["lazy"];
  /**  */
  indeterminate?: PTreeItem["indeterminate"];
  /**  */
  isLeaf?: PTreeItem["isLeaf"];
  /**  */
  loading?: PTreeItem["loading"];
  /**  */
  selectable?: PTreeItem["selectable"];
  /**  */
  defaultSlot?: PTreeItem["defaultSlot"];
  /**  */
  childrenSlot?: PTreeItem["childrenSlot"];
  /**  */
  itemElement?: PTreeItem["itemElement"];
  /**  */
  childrenContainer?: PTreeItem["childrenContainer"];
  /**  */
  expandButtonSlot?: PTreeItem["expandButtonSlot"];
  /** Emitted when the tree item expands. */
  "onp-expand"?: (e: CustomEvent<never>) => void;
  /** Emitted after the tree item expands and all animations are complete. */
  "onp-after-expand"?: (e: CustomEvent<never>) => void;
  /** Emitted when the tree item collapses. */
  "onp-collapse"?: (e: CustomEvent<never>) => void;
  /** Emitted after the tree item collapses and all animations are complete. */
  "onp-after-collapse"?: (e: CustomEvent<never>) => void;
  /** Emitted when the tree item's lazy state changes. */
  "onp-lazy-change"?: (e: CustomEvent<never>) => void;
  /** Emitted when a lazy item is selected. Use this event to asynchronously load data and append items to the tree before expanding. After appending new items, remove the `lazy` attribute to remove the loading state and update the tree. */
  "onp-lazy-load"?: (e: CustomEvent<never>) => void;
};

type PVisuallyHiddenProps = {};

export type CustomElements = {
  /**
   * A component for displaying animated GIFs and WEBPs that play and pause on interaction.
   * ---
   *
   *
   * ### **Events:**
   *  - **p-load** - Emitted when the image loads successfully.
   * - **p-error** - Emitted when the image fails to load.
   *
   * ### **Slots:**
   *  - **play-icon** - Optional play icon to use instead of the default. Works best with `<p-icon>`.
   * - **pause-icon** - Optional pause icon to use instead of the default. Works best with `<p-icon>`.
   *
   * ### **CSS Properties:**
   *  - **--control-box-size** - The size of the icon box. _(default: undefined)_
   * - **--icon-size** - The size of the play/pause icons. _(default: undefined)_
   *
   * ### **CSS Parts:**
   *  - **control-box** - The container that surrounds the pause/play icons and provides their background.
   */
  "p-animated-image": DefineComponent<PAnimatedImageProps>;

  /**
   * Alerts are used to display important messages inline or as toast notifications.
   * ---
   *
   *
   * ### **Events:**
   *  - **p-show** - Emitted when the alert opens.
   * - **p-after-show** - Emitted after the alert opens and all animations are complete.
   * - **p-hide** - Emitted when the alert closes.
   * - **p-after-hide** - Emitted after the alert closes and all animations are complete.
   *
   * ### **Methods:**
   *  - **show()** - Shows the alert.
   * - **hide()** - Hides the alert
   * - **toast()** - Displays the alert as a toast notification. This will move the alert out of its position in the DOM and, when
   * dismissed, it will be removed from the DOM completely. By storing a reference to the alert, you can reuse it by
   * calling this method again. The returned promise will resolve after the alert is hidden.
   *
   * ### **Slots:**
   *  - _default_ - The alert's main content.
   * - **icon** - An icon to show in the alert. Works best with `<p-icon>`.
   *
   * ### **CSS Parts:**
   *  - **base** - The component's base wrapper.
   * - **icon** - The container that wraps the optional icon.
   * - **message** - The container that wraps the alert's main content.
   * - **close-button** - The close button, an `<p-icon-button>`.
   * - **close-button__base** - The close button's exported `base` part.
   */
  "p-alert": DefineComponent<PAlertProps>;

  /**
   * Animate elements declaratively with nearly 100 baked-in presets, or roll your own with custom keyframes. Powered by the [Web Animations API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API).
   * ---
   *
   *
   * ### **Events:**
   *  - **p-cancel** - Emitted when the animation is canceled.
   * - **p-finish** - Emitted when the animation finishes.
   * - **p-start** - Emitted when the animation starts or restarts.
   *
   * ### **Methods:**
   *  - **cancel()** - Clears all keyframe effects caused by this animation and aborts its playback.
   * - **finish()** - Sets the playback time to the end of the animation corresponding to the current playback direction.
   *
   * ### **Slots:**
   *  - _default_ - The element to animate. Avoid slotting in more than one element, as subsequent ones will be ignored. To animate multiple elements, either wrap them in a single container or use multiple `<p-animation>` elements.
   */
  "p-animation": DefineComponent<PAnimationProps>;

  /**
   * Avatars are used to represent a person or object.
   * ---
   *
   *
   * ### **Events:**
   *  - **p-error** - The image could not be loaded. This may because of an invalid URL, a temporary network condition, or some unknown cause.
   *
   * ### **Slots:**
   *  - **icon** - The default icon to use when no image or initials are present. Works best with `<p-icon>`.
   *
   * ### **CSS Properties:**
   *  - **--size** - The size of the avatar. _(default: undefined)_
   *
   * ### **CSS Parts:**
   *  - **base** - The component's base wrapper.
   * - **icon** - The container that wraps the avatar's icon.
   * - **initials** - The container that wraps the avatar's initials.
   * - **image** - The avatar image. Only shown when the `image` attribute is set.
   */
  "p-avatar": DefineComponent<PAvatarProps>;

  /**
   * Badges are used to draw attention and display statuses or counts.
   * ---
   *
   *
   * ### **Slots:**
   *  - _default_ - The badge's content.
   *
   * ### **CSS Parts:**
   *  - **base** - The component's base wrapper.
   */
  "p-badge": DefineComponent<PBadgeProps>;

  /**
   * Breadcrumbs provide a group of links so users can easily navigate a website's hierarchy.
   * ---
   *
   *
   * ### **Slots:**
   *  - _default_ - One or more breadcrumb items to display.
   * - **separator** - The separator to use between breadcrumb items. Works best with `<p-icon>`.
   *
   * ### **CSS Parts:**
   *  - **base** - The component's base wrapper.
   */
  "p-breadcrumb": DefineComponent<PBreadcrumbProps>;

  /**
   * Breadcrumb Items are used inside [breadcrumbs](/components/breadcrumb) to represent different links.
   * ---
   *
   *
   * ### **Slots:**
   *  - _default_ - The breadcrumb item's label.
   * - **prefix** - An optional prefix, usually an icon or icon button.
   * - **suffix** - An optional suffix, usually an icon or icon button.
   * - **separator** - The separator to use for the breadcrumb item. This will only change the separator for this item. If you want to change it for all items in the group, set the separator on `<p-breadcrumb>` instead.
   *
   * ### **CSS Parts:**
   *  - **base** - The component's base wrapper.
   * - **label** - The breadcrumb item's label.
   * - **prefix** - The container that wraps the prefix.
   * - **suffix** - The container that wraps the suffix.
   * - **separator** - The container that wraps the separator.
   */
  "p-breadcrumb-item": DefineComponent<PBreadcrumbItemProps>;

  /**
   * Buttons represent actions that are available to the user.
   * ---
   *
   *
   * ### **Events:**
   *  - **p-blur** - Emitted when the button loses focus.
   * - **p-focus** - Emitted when the button gains focus.
   * - **p-invalid** - Emitted when the form control has been checked for validity and its constraints aren't satisfied.
   *
   * ### **Methods:**
   *  - **click()** - Simulates a click on the button.
   * - **focus(options: _FocusOptions_)** - Sets focus on the button.
   * - **blur()** - Removes focus from the button.
   * - **checkValidity()** - Checks for validity but does not show a validation message. Returns `true` when valid and `false` when invalid.
   * - **getForm(): _HTMLFormElement | null_** - Gets the associated form, if one exists.
   * - **reportValidity()** - Checks for validity and shows the browser's validation message if the control is invalid.
   * - **setCustomValidity(message: _string_)** - Sets a custom validation message. Pass an empty string to restore validity.
   *
   * ### **Slots:**
   *  - _default_ - The button's label.
   * - **prefix** - A presentational prefix icon or similar element.
   * - **suffix** - A presentational suffix icon or similar element.
   *
   * ### **CSS Parts:**
   *  - **base** - The component's base wrapper.
   * - **prefix** - The container that wraps the prefix.
   * - **label** - The button's label.
   * - **suffix** - The container that wraps the suffix.
   * - **caret** - The button's caret icon, an `<p-icon>` element.
   * - **spinner** - The spinner that shows when the button is in the loading state.
   */
  "p-button": DefineComponent<PButtonProps>;

  /**
   * Button groups can be used to group related buttons into sections.
   * ---
   *
   *
   * ### **Slots:**
   *  - _default_ - One or more `<p-button>` elements to display in the button group.
   *
   * ### **CSS Parts:**
   *  - **base** - The component's base wrapper.
   */
  "p-button-group": DefineComponent<PButtonGroupProps>;

  /**
   * A calendar prototype for Pure UI.
   * ---
   *
   *
   * ### **Events:**
   *  - **p-change** - Emitted when the date changes.
   *
   * ### **Methods:**
   *  - **goToToday()** - Moves the calendar to the current month and year.
   * - **goToPreviousMonth()** - Moves the calendar to the previous month.
   * - **goToNextMonth()** - Moves the calendar to the next month.
   *
   * ### **Slots:**
   *  - **footer** - Optional content to place in the calendar's footer.
   *
   * ### **CSS Properties:**
   *  - **--border-color** - The calendar's border color. _(default: undefined)_
   * - **--border-width** - The calendar's border width. _(default: undefined)_
   * - **--border-radius** - The border radius of the calendar. _(default: undefined)_
   *
   * ### **CSS Parts:**
   *  - **day** - Targets day cells.
   * - **day-label** - Targets the day labels (the name of the days in the grid).
   * - **day-weekend** - Targets days that fall on weekends.
   * - **day-weekday** - Targets weekdays.
   * - **day-current-month** - Targets days in the current month.
   * - **day-previous-month** - Targets days in the previous month.
   * - **day-next-month** - Targets days in the next month.
   * - **day-today** - Targets today.
   * - **day-selected** - Targets selected days.
   * - **day-selection-start** - Targets days that begin a selection.
   * - **day-selection-end** - Targets days that end a selection.
   */
  "p-calendar": DefineComponent<PCalendarProps>;

  /**
   * Cards can be used to group related subjects in a container.
   * ---
   *
   *
   * ### **Slots:**
   *  - _default_ - The card's main content.
   * - **header** - An optional header for the card.
   * - **footer** - An optional footer for the card.
   * - **image** - An optional image to render at the start of the card.
   *
   * ### **CSS Properties:**
   *  - **--border-color** - The card's border color, including borders that occur inside the card. _(default: undefined)_
   * - **--border-radius** - The border radius for the card's edges. _(default: undefined)_
   * - **--border-width** - The width of the card's borders. _(default: undefined)_
   * - **--padding** - The padding to use for the card's sections. _(default: undefined)_
   *
   * ### **CSS Parts:**
   *  - **base** - The component's base wrapper.
   * - **image** - The container that wraps the card's image.
   * - **header** - The container that wraps the card's header.
   * - **body** - The container that wraps the card's main content.
   * - **footer** - The container that wraps the card's footer.
   */
  "p-card": DefineComponent<PCardProps>;

  /**
   * Carousels display an arbitrary number of content slides along a horizontal or vertical axis.
   * ---
   *
   *
   * ### **Events:**
   *  - **p-slide-change** - Emitted when the active slide changes.
   *
   * ### **Methods:**
   *  - **previous(behavior: _ScrollBehavior_)** - Move the carousel backward by `slides-per-move` slides.
   * - **next(behavior: _ScrollBehavior_)** - Move the carousel forward by `slides-per-move` slides.
   * - **goToSlide(index: _number_, behavior: _ScrollBehavior_)** - Scrolls the carousel to the slide specified by `index`.
   *
   * ### **Slots:**
   *  - _default_ - The carousel's main content, one or more `<p-carousel-item>` elements.
   * - **next-icon** - Optional next icon to use instead of the default. Works best with `<p-icon>`.
   * - **previous-icon** - Optional previous icon to use instead of the default. Works best with `<p-icon>`.
   *
   * ### **CSS Properties:**
   *  - **--slide-gap** - The space between each slide. _(default: undefined)_
   * - **--aspect-ratio** - The aspect ratio of each slide. _(default: 16/9)_
   * - **--scroll-hint** - The amount of padding to apply to the scroll area, allowing adjacent slides to become partially visible as a scroll hint. _(default: undefined)_
   *
   * ### **CSS Parts:**
   *  - **base** - The carousel's internal wrapper.
   * - **scroll-container** - The scroll container that wraps the slides.
   * - **pagination** - The pagination indicators wrapper.
   * - **pagination-item** - The pagination indicator.
   * - **pagination-item--active** - Applied when the item is active.
   * - **navigation** - The navigation wrapper.
   * - **navigation-button** - The navigation button.
   * - **navigation-button--previous** - Applied to the previous button.
   * - **navigation-button--next** - Applied to the next button.
   */
  "p-carousel": DefineComponent<PCarouselProps>;

  /**
   * A carousel item represent a slide within a [carousel](/components/carousel).
   * ---
   *
   *
   * ### **Slots:**
   *  - _default_ - The carousel item's content..
   *
   * ### **CSS Properties:**
   *  - **--aspect-ratio** - The slide's aspect ratio. Inherited from the carousel by default. _(default: undefined)_
   */
  "p-carousel-item": DefineComponent<PCarouselItemProps>;

  /**
   * Checkboxes allow the user to toggle an option on or off.
   * ---
   *
   *
   * ### **Events:**
   *  - **p-blur** - Emitted when the checkbox loses focus.
   * - **p-change** - Emitted when the checked state changes.
   * - **p-focus** - Emitted when the checkbox gains focus.
   * - **p-input** - Emitted when the checkbox receives input.
   * - **p-invalid** - Emitted when the form control has been checked for validity and its constraints aren't satisfied.
   *
   * ### **Methods:**
   *  - **click()** - Simulates a click on the checkbox.
   * - **focus(options: _FocusOptions_)** - Sets focus on the checkbox.
   * - **blur()** - Removes focus from the checkbox.
   * - **checkValidity()** - Checks for validity but does not show a validation message. Returns `true` when valid and `false` when invalid.
   * - **getForm(): _HTMLFormElement | null_** - Gets the associated form, if one exists.
   * - **reportValidity()** - Checks for validity and shows the browser's validation message if the control is invalid.
   * - **setCustomValidity(message: _string_)** - Sets a custom validation message. The value provided will be shown to the user when the form is submitted. To clear
   * the custom validation message, call this method with an empty string.
   *
   * ### **Slots:**
   *  - _default_ - The checkbox's label.
   * - **help-text** - Text that describes how to use the checkbox. Alternatively, you can use the `help-text` attribute.
   *
   * ### **CSS Parts:**
   *  - **base** - The component's base wrapper.
   * - **control** - The square container that wraps the checkbox's checked state.
   * - **control--checked** - Matches the control part when the checkbox is checked.
   * - **control--indeterminate** - Matches the control part when the checkbox is indeterminate.
   * - **checked-icon** - The checked icon, an `<p-icon>` element.
   * - **indeterminate-icon** - The indeterminate icon, an `<p-icon>` element.
   * - **label** - The container that wraps the checkbox's label.
   * - **form-control-help-text** - The help text's wrapper.
   */
  "p-checkbox": DefineComponent<PCheckboxProps>;

  /**
   * Color pickers allow the user to select a color.
   * ---
   *
   *
   * ### **Events:**
   *  - **p-blur** - Emitted when the color picker loses focus.
   * - **p-change** - Emitted when the color picker's value changes.
   * - **p-focus** - Emitted when the color picker receives focus.
   * - **p-input** - Emitted when the color picker receives input.
   * - **p-invalid** - Emitted when the form control has been checked for validity and its constraints aren't satisfied.
   *
   * ### **Methods:**
   *  - **focus(options: _FocusOptions_)** - Sets focus on the color picker.
   * - **blur()** - Removes focus from the color picker.
   * - **getFormattedValue(format: _"hex" | "hexa" | "rgb" | "rgba" | "hsl" | "hsla" | "hsv" | "hsva"_)** - Returns the current value as a string in the specified format.
   * - **checkValidity()** - Checks for validity but does not show a validation message. Returns `true` when valid and `false` when invalid.
   * - **getForm(): _HTMLFormElement | null_** - Gets the associated form, if one exists.
   * - **reportValidity()** - Checks for validity and shows the browser's validation message if the control is invalid.
   * - **setCustomValidity(message: _string_)** - Sets a custom validation message. Pass an empty string to restore validity.
   *
   * ### **Slots:**
   *  - **label** - The color picker's form label. Alternatively, you can use the `label` attribute.
   *
   * ### **CSS Properties:**
   *  - **--grid-width** - The width of the color grid. _(default: undefined)_
   * - **--grid-height** - The height of the color grid. _(default: undefined)_
   * - **--grid-handle-size** - The size of the color grid's handle. _(default: undefined)_
   * - **--slider-height** - The height of the hue and alpha sliders. _(default: undefined)_
   * - **--slider-handle-size** - The diameter of the slider's handle. _(default: undefined)_
   * - **--swatch-size** - The size of each predefined color swatch. _(default: undefined)_
   *
   * ### **CSS Parts:**
   *  - **base** - The component's base wrapper.
   * - **trigger** - The color picker's dropdown trigger.
   * - **swatches** - The container that holds the swatches.
   * - **swatch** - Each individual swatch.
   * - **grid** - The color grid.
   * - **grid-handle** - The color grid's handle.
   * - **slider** - Hue and opacity sliders.
   * - **slider-handle** - Hue and opacity slider handles.
   * - **hue-slider** - The hue slider.
   * - **hue-slider-handle** - The hue slider's handle.
   * - **opacity-slider** - The opacity slider.
   * - **opacity-slider-handle** - The opacity slider's handle.
   * - **preview** - The preview color.
   * - **input** - The text input.
   * - **eye-dropper-button** - The eye dropper button.
   * - **eye-dropper-button__base** - The eye dropper button's exported `button` part.
   * - **eye-dropper-button__prefix** - The eye dropper button's exported `prefix` part.
   * - **eye-dropper-button__label** - The eye dropper button's exported `label` part.
   * - **eye-dropper-button__suffix** - The eye dropper button's exported `suffix` part.
   * - **eye-dropper-button__caret** - The eye dropper button's exported `caret` part.
   * - **format-button** - The format button.
   * - **format-button__base** - The format button's exported `button` part.
   * - **format-button__prefix** - The format button's exported `prefix` part.
   * - **format-button__label** - The format button's exported `label` part.
   * - **format-button__suffix** - The format button's exported `suffix` part.
   * - **format-button__caret** - The format button's exported `caret` part.
   */
  "p-color-picker": DefineComponent<PColorPickerProps>;

  /**
   * Copies text data to the clipboard when the user clicks the trigger.
   * ---
   *
   *
   * ### **Events:**
   *  - **p-copy** - Emitted when the data has been copied.
   * - **p-error** - Emitted when the data could not be copied.
   *
   * ### **Slots:**
   *  - **copy-icon** - The icon to show in the default copy state. Works best with `<p-icon>`.
   * - **success-icon** - The icon to show when the content is copied. Works best with `<p-icon>`.
   * - **error-icon** - The icon to show when a copy error occurs. Works best with `<p-icon>`.
   *
   * ### **CSS Properties:**
   *  - **--success-color** - The color to use for success feedback. _(default: undefined)_
   * - **--error-color** - The color to use for error feedback. _(default: undefined)_
   *
   * ### **CSS Parts:**
   *  - **button** - The internal `<button>` element.
   * - **copy-icon** - The container that holds the copy icon.
   * - **success-icon** - The container that holds the success icon.
   * - **error-icon** - The container that holds the error icon.
   * - **tooltip__base** - The tooltip's exported `base` part.
   * - **tooltip__base__popup** - The tooltip's exported `popup` part.
   * - **tooltip__base__arrow** - The tooltip's exported `arrow` part.
   * - **tooltip__body** - The tooltip's exported `body` part.
   */
  "p-copy-button": DefineComponent<PCopyButtonProps>;

  /**
   * Details show a brief summary and expand to show additional content.
   * ---
   *
   *
   * ### **Events:**
   *  - **p-show** - Emitted when the details opens.
   * - **p-after-show** - Emitted after the details opens and all animations are complete.
   * - **p-hide** - Emitted when the details closes.
   * - **p-after-hide** - Emitted after the details closes and all animations are complete.
   *
   * ### **Methods:**
   *  - **show()** - Shows the details.
   * - **hide()** - Hides the details
   *
   * ### **Slots:**
   *  - _default_ - The details' main content.
   * - **summary** - The details' summary. Alternatively, you can use the `summary` attribute.
   * - **expand-icon** - Optional expand icon to use instead of the default. Works best with `<p-icon>`.
   * - **collapse-icon** - Optional collapse icon to use instead of the default. Works best with `<p-icon>`.
   *
   * ### **CSS Parts:**
   *  - **base** - The component's base wrapper.
   * - **header** - The header that wraps both the summary and the expand/collapse icon.
   * - **summary** - The container that wraps the summary.
   * - **summary-icon** - The container that wraps the expand/collapse icons.
   * - **content** - The details content.
   */
  "p-details": DefineComponent<PDetailsProps>;

  /**
   * Dialogs, sometimes called "modals", appear above the page and require the user's immediate attention.
   * ---
   *
   *
   * ### **Events:**
   *  - **p-show** - Emitted when the dialog opens.
   * - **p-after-show** - Emitted after the dialog opens and all animations are complete.
   * - **p-hide** - Emitted when the dialog closes.
   * - **p-after-hide** - Emitted after the dialog closes and all animations are complete.
   * - **p-initial-focus** - Emitted when the dialog opens and is ready to receive focus. Calling `event.preventDefault()` will prevent focusing and allow you to set it on a different element, such as an input.
   * - **p-request-close** - Emitted when the user attempts to close the dialog by clicking the close button, clicking the overlay, or pressing escape. Calling `event.preventDefault()` will keep the dialog open. Avoid using this unless closing the dialog will result in destructive behavior such as data loss.
   *
   * ### **Methods:**
   *  - **show()** - Shows the dialog.
   * - **hide()** - Hides the dialog
   *
   * ### **Slots:**
   *  - _default_ - The dialog's main content.
   * - **label** - The dialog's label. Alternatively, you can use the `label` attribute.
   * - **header-actions** - Optional actions to add to the header. Works best with `<p-icon-button>`.
   * - **footer** - The dialog's footer, usually one or more buttons representing various options.
   *
   * ### **CSS Properties:**
   *  - **--width** - The preferred width of the dialog. Note that the dialog will shrink to accommodate smaller screens. _(default: undefined)_
   * - **--header-spacing** - The amount of padding to use for the header. _(default: undefined)_
   * - **--body-spacing** - The amount of padding to use for the body. _(default: undefined)_
   * - **--footer-spacing** - The amount of padding to use for the footer. _(default: undefined)_
   *
   * ### **CSS Parts:**
   *  - **base** - The component's base wrapper.
   * - **overlay** - The overlay that covers the screen behind the dialog.
   * - **panel** - The dialog's panel (where the dialog and its content are rendered).
   * - **header** - The dialog's header. This element wraps the title and header actions.
   * - **header-actions** - Optional actions to add to the header. Works best with `<p-icon-button>`.
   * - **title** - The dialog's title.
   * - **close-button** - The close button, an `<p-icon-button>`.
   * - **close-button__base** - The close button's exported `base` part.
   * - **body** - The dialog's body.
   * - **footer** - The dialog's footer.
   */
  "p-dialog": DefineComponent<PDialogProps>;

  /**
   * Dividers are used to visually separate or group elements.
   * ---
   *
   *
   * ### **CSS Properties:**
   *  - **--color** - The color of the divider. _(default: undefined)_
   * - **--width** - The width of the divider. _(default: undefined)_
   * - **--spacing** - The spacing of the divider. _(default: undefined)_
   */
  "p-divider": DefineComponent<PDividerProps>;

  /**
   * Drawers slide in from a container to expose additional options and information.
   * ---
   *
   *
   * ### **Events:**
   *  - **p-show** - Emitted when the drawer opens.
   * - **p-after-show** - Emitted after the drawer opens and all animations are complete.
   * - **p-hide** - Emitted when the drawer closes.
   * - **p-after-hide** - Emitted after the drawer closes and all animations are complete.
   * - **p-initial-focus** - Emitted when the drawer opens and is ready to receive focus. Calling `event.preventDefault()` will prevent focusing and allow you to set it on a different element, such as an input.
   * - **p-request-close** - Emitted when the user attempts to close the drawer by clicking the close button, clicking the overlay, or pressing escape. Calling `event.preventDefault()` will keep the drawer open. Avoid using this unless closing the drawer will result in destructive behavior such as data loss.
   *
   * ### **Methods:**
   *  - **show()** - Shows the drawer.
   * - **hide()** - Hides the drawer
   *
   * ### **Slots:**
   *  - _default_ - The drawer's main content.
   * - **label** - The drawer's label. Alternatively, you can use the `label` attribute.
   * - **header-actions** - Optional actions to add to the header. Works best with `<p-icon-button>`.
   * - **footer** - The drawer's footer, usually one or more buttons representing various options.
   *
   * ### **CSS Properties:**
   *  - **--size** - The preferred size of the drawer. This will be applied to the drawer's width or height depending on its `placement`. Note that the drawer will shrink to accommodate smaller screens. _(default: undefined)_
   * - **--header-spacing** - The amount of padding to use for the header. _(default: undefined)_
   * - **--body-spacing** - The amount of padding to use for the body. _(default: undefined)_
   * - **--footer-spacing** - The amount of padding to use for the footer. _(default: undefined)_
   *
   * ### **CSS Parts:**
   *  - **base** - The component's base wrapper.
   * - **overlay** - The overlay that covers the screen behind the drawer.
   * - **panel** - The drawer's panel (where the drawer and its content are rendered).
   * - **header** - The drawer's header. This element wraps the title and header actions.
   * - **header-actions** - Optional actions to add to the header. Works best with `<p-icon-button>`.
   * - **title** - The drawer's title.
   * - **close-button** - The close button, an `<p-icon-button>`.
   * - **close-button__base** - The close button's exported `base` part.
   * - **body** - The drawer's body.
   * - **footer** - The drawer's footer.
   */
  "p-drawer": DefineComponent<PDrawerProps>;

  /**
   * Dropdowns expose additional content that "drops down" in a panel.
   * ---
   *
   *
   * ### **Events:**
   *  - **p-show** - Emitted when the dropdown opens.
   * - **p-after-show** - Emitted after the dropdown opens and all animations are complete.
   * - **p-hide** - Emitted when the dropdown closes.
   * - **p-after-hide** - Emitted after the dropdown closes and all animations are complete.
   *
   * ### **Methods:**
   *  - **show()** - Shows the dropdown panel.
   * - **hide()** - Hides the dropdown panel
   * - **reposition()** - Instructs the dropdown menu to reposition. Useful when the position or size of the trigger changes when the menu
   * is activated.
   *
   * ### **Slots:**
   *  - _default_ - The dropdown's main content.
   * - **trigger** - The dropdown's trigger, usually a `<p-button>` element.
   *
   * ### **CSS Parts:**
   *  - **base** - The component's base wrapper, an `<p-popup>` element.
   * - **base__popup** - The popup's exported `popup` part. Use this to target the tooltip's popup container.
   * - **trigger** - The container that wraps the trigger.
   * - **panel** - The panel that gets shown when the dropdown is open.
   */
  "p-dropdown": DefineComponent<PDropdownProps>;

  /**
   * Formats a number as a human readable bytes value.
   * ---
   *
   */
  "p-format-bytes": DefineComponent<PFormatBytesProps>;

  /**
   * Formats a date/time using the specified locale and options.
   * ---
   *
   */
  "p-format-date": DefineComponent<PFormatDateProps>;

  /**
   * Formats a number using the specified locale and options.
   * ---
   *
   */
  "p-format-number": DefineComponent<PFormatNumberProps>;

  /**
   * Icons are symbols that can be used to represent various options within an application.
   * ---
   *
   *
   * ### **Events:**
   *  - **p-load** - Emitted when the icon has loaded. When using `spriteSheet: true` this will not emit.
   * - **p-error** - Emitted when the icon fails to load due to an error. When using `spriteSheet: true` this will not emit.
   *
   * ### **CSS Parts:**
   *  - **svg** - The internal SVG element.
   * - **use** - The <use> element generated when using `spriteSheet: true`
   */
  "p-icon": DefineComponent<PIconProps>;

  /**
   * Icons buttons are simple, icon-only buttons that can be used for actions and in toolbars.
   * ---
   *
   *
   * ### **Events:**
   *  - **p-blur** - Emitted when the icon button loses focus.
   * - **p-focus** - Emitted when the icon button gains focus.
   *
   * ### **Methods:**
   *  - **click()** - Simulates a click on the icon button.
   * - **focus(options: _FocusOptions_)** - Sets focus on the icon button.
   * - **blur()** - Removes focus from the icon button.
   *
   * ### **CSS Parts:**
   *  - **base** - The component's base wrapper.
   */
  "p-icon-button": DefineComponent<PIconButtonProps>;

  /**
   * Compare visual differences between similar photos with a sliding panel.
   * ---
   *
   *
   * ### **Events:**
   *  - **p-change** - Emitted when the position changes.
   *
   * ### **Slots:**
   *  - **before** - The before image, an `<img>` or `<svg>` element.
   * - **after** - The after image, an `<img>` or `<svg>` element.
   * - **handle** - The icon used inside the handle.
   *
   * ### **CSS Properties:**
   *  - **--divider-width** - The width of the dividing line. _(default: undefined)_
   * - **--handle-size** - The size of the compare handle. _(default: undefined)_
   *
   * ### **CSS Parts:**
   *  - **base** - The component's base wrapper.
   * - **before** - The container that wraps the before image.
   * - **after** - The container that wraps the after image.
   * - **divider** - The divider that separates the images.
   * - **handle** - The handle that the user drags to expose the after image.
   */
  "p-image-comparer": DefineComponent<PImageComparerProps>;

  /**
   * Includes give you the power to embed external HTML files into the page.
   * ---
   *
   *
   * ### **Events:**
   *  - **p-load** - Emitted when the included file is loaded.
   * - **p-error** - Emitted when the included file fails to load due to an error.
   */
  "p-include": DefineComponent<PIncludeProps>;

  /**
   * Inputs collect data from the user.
   * ---
   *
   *
   * ### **Events:**
   *  - **p-blur** - Emitted when the control loses focus.
   * - **p-change** - Emitted when an alteration to the control's value is committed by the user.
   * - **p-clear** - Emitted when the clear button is activated.
   * - **p-focus** - Emitted when the control gains focus.
   * - **p-input** - Emitted when the control receives input.
   * - **p-invalid** - Emitted when the form control has been checked for validity and its constraints aren't satisfied.
   *
   * ### **Methods:**
   *  - **focus(options: _FocusOptions_)** - Sets focus on the input.
   * - **blur()** - Removes focus from the input.
   * - **select()** - Selects all the text in the input.
   * - **setSelectionRange(selectionStart: _number_, selectionEnd: _number_, selectionDirection: _"forward" | "backward" | "none"_)** - Sets the start and end positions of the text selection (0-based).
   * - **setRangeText(replacement: _string_, start: _number_, end: _number_, selectMode: _"select" | "start" | "end" | "preserve"_)** - Replaces a range of text with a new string.
   * - **showPicker()** - Displays the browser picker for an input element (only works if the browser supports it for the input type).
   * - **stepUp()** - Increments the value of a numeric input type by the value of the step attribute.
   * - **stepDown()** - Decrements the value of a numeric input type by the value of the step attribute.
   * - **checkValidity()** - Checks for validity but does not show a validation message. Returns `true` when valid and `false` when invalid.
   * - **getForm(): _HTMLFormElement | null_** - Gets the associated form, if one exists.
   * - **reportValidity()** - Checks for validity and shows the browser's validation message if the control is invalid.
   * - **setCustomValidity(message: _string_)** - Sets a custom validation message. Pass an empty string to restore validity.
   *
   * ### **Slots:**
   *  - **label** - The input's label. Alternatively, you can use the `label` attribute.
   * - **prefix** - Used to prepend a presentational icon or similar element to the input.
   * - **suffix** - Used to append a presentational icon or similar element to the input.
   * - **clear-icon** - An icon to use in lieu of the default clear icon.
   * - **show-password-icon** - An icon to use in lieu of the default show password icon.
   * - **hide-password-icon** - An icon to use in lieu of the default hide password icon.
   * - **help-text** - Text that describes how to use the input. Alternatively, you can use the `help-text` attribute.
   *
   * ### **CSS Parts:**
   *  - **form-control** - The form control that wraps the label, input, and help text.
   * - **form-control-label** - The label's wrapper.
   * - **form-control-input** - The input's wrapper.
   * - **form-control-help-text** - The help text's wrapper.
   * - **base** - The component's base wrapper.
   * - **input** - The internal `<input>` control.
   * - **prefix** - The container that wraps the prefix.
   * - **clear-button** - The clear button.
   * - **password-toggle-button** - The password toggle button.
   * - **suffix** - The container that wraps the suffix.
   */
  "p-input": DefineComponent<PInputProps>;

  /**
   * Menus provide a list of options for the user to choose from.
   * ---
   *
   *
   * ### **Events:**
   *  - **p-select** - Emitted when a menu item is selected.
   *
   * ### **Slots:**
   *  - _default_ - The menu's content, including menu items, menu labels, and dividers.
   */
  "p-menu": DefineComponent<PMenuProps>;

  /**
   * Menu items provide options for the user to pick from in a menu.
   * ---
   *
   *
   * ### **Methods:**
   *  - **getTextLabel()** - Returns a text label based on the contents of the menu item's default slot.
   *
   * ### **Slots:**
   *  - _default_ - The menu item's label.
   * - **prefix** - Used to prepend an icon or similar element to the menu item.
   * - **suffix** - Used to append an icon or similar element to the menu item.
   * - **submenu** - Used to denote a nested menu.
   *
   * ### **CSS Properties:**
   *  - **--submenu-offset** - The distance submenus shift to overlap the parent menu. _(default: -2px)_
   *
   * ### **CSS Parts:**
   *  - **base** - The component's base wrapper.
   * - **checked-icon** - The checked icon, which is only visible when the menu item is checked.
   * - **prefix** - The prefix container.
   * - **label** - The menu item label.
   * - **suffix** - The suffix container.
   * - **spinner** - The spinner that shows when the menu item is in the loading state.
   * - **spinner__base** - The spinner's base part.
   * - **submenu-icon** - The submenu icon, visible only when the menu item has a submenu (not yet implemented).
   */
  "p-menu-item": DefineComponent<PMenuItemProps>;

  /**
   * Menu labels are used to describe a group of menu items.
   * ---
   *
   *
   * ### **Slots:**
   *  - _default_ - The menu label's content.
   *
   * ### **CSS Parts:**
   *  - **base** - The component's base wrapper.
   */
  "p-menu-label": DefineComponent<PMenuLabelProps>;

  /**
   * The Mutation Observer component offers a thin, declarative interface to the [`MutationObserver API`](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver).
   * ---
   *
   *
   * ### **Events:**
   *  - **p-mutation** - Emitted when a mutation occurs.
   *
   * ### **Slots:**
   *  - _default_ - The content to watch for mutations.
   */
  "p-mutation-observer": DefineComponent<PMutationObserverProps>;

  /**
   * Options define the selectable items within various form controls such as [select](/components/select).
   * ---
   *
   *
   * ### **Methods:**
   *  - **getTextLabel()** - Returns a plain text label based on the option's content.
   *
   * ### **Slots:**
   *  - _default_ - The option's label.
   * - **prefix** - Used to prepend an icon or similar element to the menu item.
   * - **suffix** - Used to append an icon or similar element to the menu item.
   *
   * ### **CSS Parts:**
   *  - **checked-icon** - The checked icon, an `<p-icon>` element.
   * - **base** - The component's base wrapper.
   * - **label** - The option's label.
   * - **prefix** - The container that wraps the prefix.
   * - **suffix** - The container that wraps the suffix.
   */
  "p-option": DefineComponent<POptionProps>;

  /**
   * Popup is a utility that lets you declaratively anchor "popup" containers to another element.
   * ---
   *
   *
   * ### **Events:**
   *  - **p-reposition** - Emitted when the popup is repositioned. This event can fire a lot, so avoid putting expensive operations in your listener or consider debouncing it.
   *
   * ### **Methods:**
   *  - **reposition()** - Forces the popup to recalculate and reposition itself.
   *
   * ### **Slots:**
   *  - _default_ - The popup's content.
   * - **anchor** - The element the popup will be anchored to. If the anchor lives outside of the popup, you can use the `anchor` attribute or property instead.
   *
   * ### **CSS Properties:**
   *  - **--arrow-size** - The size of the arrow. Note that an arrow won't be shown unless the `arrow` attribute is used. _(default: 6px)_
   * - **--arrow-color** - The color of the arrow. _(default: var(--p-color-neutral-0))_
   * - **--auto-size-available-width** - A read-only custom property that determines the amount of width the popup can be before overflowing. Useful for positioning child elements that need to overflow. This property is only available when using `auto-size`. _(default: undefined)_
   * - **--auto-size-available-height** - A read-only custom property that determines the amount of height the popup can be before overflowing. Useful for positioning child elements that need to overflow. This property is only available when using `auto-size`. _(default: undefined)_
   *
   * ### **CSS Parts:**
   *  - **arrow** - The arrow's container. Avoid setting `top|bottom|left|right` properties, as these values are assigned dynamically as the popup moves. This is most useful for applying a background color to match the popup, and maybe a border or box shadow.
   * - **popup** - The popup's container. Useful for setting a background color, box shadow, etc.
   * - **hover-bridge** - The hover bridge element. Only available when the `hover-bridge` option is enabled.
   */
  "p-popup": DefineComponent<PPopupProps>;

  /**
   * Progress bars are used to show the status of an ongoing operation.
   * ---
   *
   *
   * ### **Slots:**
   *  - _default_ - A label to show inside the progress indicator.
   *
   * ### **CSS Properties:**
   *  - **--height** - The progress bar's height. _(default: undefined)_
   * - **--track-color** - The color of the track. _(default: undefined)_
   * - **--indicator-color** - The color of the indicator. _(default: undefined)_
   * - **--label-color** - The color of the label. _(default: undefined)_
   *
   * ### **CSS Parts:**
   *  - **base** - The component's base wrapper.
   * - **indicator** - The progress bar's indicator.
   * - **label** - The progress bar's label.
   */
  "p-progress-bar": DefineComponent<PProgressBarProps>;

  /**
   * Progress rings are used to show the progress of a determinate operation in a circular fashion.
   * ---
   *
   *
   * ### **Slots:**
   *  - _default_ - A label to show inside the ring.
   *
   * ### **CSS Properties:**
   *  - **--size** - The diameter of the progress ring (cannot be a percentage). _(default: undefined)_
   * - **--track-width** - The width of the track. _(default: undefined)_
   * - **--track-color** - The color of the track. _(default: undefined)_
   * - **--indicator-width** - The width of the indicator. Defaults to the track width. _(default: undefined)_
   * - **--indicator-color** - The color of the indicator. _(default: undefined)_
   * - **--indicator-transition-duration** - The duration of the indicator's transition when the value changes. _(default: undefined)_
   *
   * ### **CSS Parts:**
   *  - **base** - The component's base wrapper.
   * - **label** - The progress ring label.
   */
  "p-progress-ring": DefineComponent<PProgressRingProps>;

  /**
   * Generates a [QR code](https://www.qrcode.com/) and renders it using the [Canvas API](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API).
   * ---
   *
   *
   * ### **CSS Parts:**
   *  - **base** - The component's base wrapper.
   */
  "p-qr-code": DefineComponent<PQrCodeProps>;

  /**
   * Radios allow the user to select a single option from a group.
   * ---
   *
   *
   * ### **Events:**
   *  - **p-blur** - Emitted when the control loses focus.
   * - **p-focus** - Emitted when the control gains focus.
   *
   * ### **Slots:**
   *  - _default_ - The radio's label.
   *
   * ### **CSS Parts:**
   *  - **base** - The component's base wrapper.
   * - **control** - The circular container that wraps the radio's checked state.
   * - **control--checked** - The radio control when the radio is checked.
   * - **checked-icon** - The checked icon, an `<p-icon>` element.
   * - **label** - The container that wraps the radio's label.
   */
  "p-radio": DefineComponent<PRadioProps>;

  /**
   * Radios buttons allow the user to select a single option from a group using a button-like control.
   * ---
   *
   *
   * ### **Events:**
   *  - **p-blur** - Emitted when the button loses focus.
   * - **p-focus** - Emitted when the button gains focus.
   *
   * ### **Methods:**
   *  - **focus(options: _FocusOptions_)** - Sets focus on the radio button.
   * - **blur()** - Removes focus from the radio button.
   *
   * ### **Slots:**
   *  - _default_ - The radio button's label.
   * - **prefix** - A presentational prefix icon or similar element.
   * - **suffix** - A presentational suffix icon or similar element.
   *
   * ### **CSS Parts:**
   *  - **base** - The component's base wrapper.
   * - **button** - The internal `<button>` element.
   * - **button--checked** - The internal button element when the radio button is checked.
   * - **prefix** - The container that wraps the prefix.
   * - **label** - The container that wraps the radio button's label.
   * - **suffix** - The container that wraps the suffix.
   */
  "p-radio-button": DefineComponent<PRadioButtonProps>;

  /**
   * Radio groups are used to group multiple [radios](/components/radio) or [radio buttons](/components/radio-button) so they function as a single form control.
   * ---
   *
   *
   * ### **Events:**
   *  - **p-change** - Emitted when the radio group's selected value changes.
   * - **p-input** - Emitted when the radio group receives user input.
   * - **p-invalid** - Emitted when the form control has been checked for validity and its constraints aren't satisfied.
   *
   * ### **Methods:**
   *  - **checkValidity()** - Checks for validity but does not show a validation message. Returns `true` when valid and `false` when invalid.
   * - **getForm(): _HTMLFormElement | null_** - Gets the associated form, if one exists.
   * - **reportValidity(): _boolean_** - Checks for validity and shows the browser's validation message if the control is invalid.
   * - **setCustomValidity(message)** - Sets a custom validation message. Pass an empty string to restore validity.
   *
   * ### **Slots:**
   *  - _default_ - The default slot where `<p-radio>` or `<p-radio-button>` elements are placed.
   * - **label** - The radio group's label. Required for proper accessibility. Alternatively, you can use the `label` attribute.
   * - **help-text** - Text that describes how to use the radio group. Alternatively, you can use the `help-text` attribute.
   *
   * ### **CSS Parts:**
   *  - **form-control** - The form control that wraps the label, input, and help text.
   * - **form-control-label** - The label's wrapper.
   * - **form-control-input** - The input's wrapper.
   * - **form-control-help-text** - The help text's wrapper.
   * - **button-group** - The button group that wraps radio buttons.
   * - **button-group__base** - The button group's `base` part.
   */
  "p-radio-group": DefineComponent<PRadioGroupProps>;

  /**
   * Ratings give users a way to quickly view and provide feedback.
   * ---
   *
   *
   * ### **Events:**
   *  - **p-change** - Emitted when the rating's value changes.
   * - **p-hover** - Emitted when the user hovers over a value. The `phase` property indicates when hovering starts, moves to a new value, or ends. The `value` property tells what the rating's value would be if the user were to commit to the hovered value.
   *
   * ### **Methods:**
   *  - **focus(options: _FocusOptions_)** - Sets focus on the rating.
   * - **blur()** - Removes focus from the rating.
   *
   * ### **CSS Properties:**
   *  - **--symbol-color** - The inactive color for symbols. _(default: undefined)_
   * - **--symbol-color-active** - The active color for symbols. _(default: undefined)_
   * - **--symbol-size** - The size of symbols. _(default: undefined)_
   * - **--symbol-spacing** - The spacing to use around symbols. _(default: undefined)_
   *
   * ### **CSS Parts:**
   *  - **base** - The component's base wrapper.
   */
  "p-rating": DefineComponent<PRatingProps>;

  /**
   * Outputs a localized time phrase relative to the current date and time.
   * ---
   *
   */
  "p-relative-time": DefineComponent<PRelativeTimeProps>;

  /**
   * Ranges allow the user to select a single value within a given range using a slider.
   * ---
   *
   *
   * ### **Events:**
   *  - **p-blur** - Emitted when the control loses focus.
   * - **p-change** - Emitted when an alteration to the control's value is committed by the user.
   * - **p-focus** - Emitted when the control gains focus.
   * - **p-input** - Emitted when the control receives input.
   * - **p-invalid** - Emitted when the form control has been checked for validity and its constraints aren't satisfied.
   *
   * ### **Methods:**
   *  - **focus(options: _FocusOptions_)** - Sets focus on the range.
   * - **blur()** - Removes focus from the range.
   * - **stepUp()** - Increments the value of the range by the value of the step attribute.
   * - **stepDown()** - Decrements the value of the range by the value of the step attribute.
   * - **checkValidity()** - Checks for validity but does not show a validation message. Returns `true` when valid and `false` when invalid.
   * - **getForm(): _HTMLFormElement | null_** - Gets the associated form, if one exists.
   * - **reportValidity()** - Checks for validity and shows the browser's validation message if the control is invalid.
   * - **setCustomValidity(message: _string_)** - Sets a custom validation message. Pass an empty string to restore validity.
   *
   * ### **Slots:**
   *  - **label** - The range's label. Alternatively, you can use the `label` attribute.
   * - **help-text** - Text that describes how to use the input. Alternatively, you can use the `help-text` attribute.
   *
   * ### **CSS Properties:**
   *  - **--thumb-size** - The size of the thumb. _(default: undefined)_
   * - **--tooltip-offset** - The vertical distance the tooltip is offset from the track. _(default: undefined)_
   * - **--track-color-active** - The color of the portion of the track that represents the current value. _(default: undefined)_
   * - **--track-color-inactive** - The of the portion of the track that represents the remaining value. _(default: undefined)_
   * - **--track-height** - The height of the track. _(default: undefined)_
   * - **--track-active-offset** - The point of origin of the active track. _(default: undefined)_
   *
   * ### **CSS Parts:**
   *  - **form-control** - The form control that wraps the label, input, and help text.
   * - **form-control-label** - The label's wrapper.
   * - **form-control-input** - The range's wrapper.
   * - **form-control-help-text** - The help text's wrapper.
   * - **base** - The component's base wrapper.
   * - **input** - The internal `<input>` element.
   * - **tooltip** - The range's tooltip.
   */
  "p-range": DefineComponent<PRangeProps>;

  /**
   * The Resize Observer component offers a thin, declarative interface to the [`ResizeObserver API`](https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver).
   * ---
   *
   *
   * ### **Events:**
   *  - **p-resize** - Emitted when the element is resized.
   *
   * ### **Slots:**
   *  - _default_ - One or more elements to watch for resizing.
   */
  "p-resize-observer": DefineComponent<PResizeObserverProps>;

  /**
   * Selects allow you to choose items from a menu of predefined options.
   * ---
   *
   *
   * ### **Events:**
   *  - **p-change** - Emitted when the control's value changes.
   * - **p-clear** - Emitted when the control's value is cleared.
   * - **p-input** - Emitted when the control receives input.
   * - **p-focus** - Emitted when the control gains focus.
   * - **p-blur** - Emitted when the control loses focus.
   * - **p-show** - Emitted when the select's menu opens.
   * - **p-after-show** - Emitted after the select's menu opens and all animations are complete.
   * - **p-hide** - Emitted when the select's menu closes.
   * - **p-after-hide** - Emitted after the select's menu closes and all animations are complete.
   * - **p-invalid** - Emitted when the form control has been checked for validity and its constraints aren't satisfied.
   *
   * ### **Methods:**
   *  - **show()** - Shows the listbox.
   * - **hide()** - Hides the listbox.
   * - **checkValidity()** - Checks for validity but does not show a validation message. Returns `true` when valid and `false` when invalid.
   * - **getForm(): _HTMLFormElement | null_** - Gets the associated form, if one exists.
   * - **reportValidity()** - Checks for validity and shows the browser's validation message if the control is invalid.
   * - **setCustomValidity(message: _string_)** - Sets a custom validation message. Pass an empty string to restore validity.
   * - **focus(options: _FocusOptions_)** - Sets focus on the control.
   * - **blur()** - Removes focus from the control.
   *
   * ### **Slots:**
   *  - _default_ - The listbox options. Must be `<p-option>` elements. You can use `<p-divider>` to group items visually.
   * - **label** - The input's label. Alternatively, you can use the `label` attribute.
   * - **prefix** - Used to prepend a presentational icon or similar element to the combobox.
   * - **suffix** - Used to append a presentational icon or similar element to the combobox.
   * - **clear-icon** - An icon to use in lieu of the default clear icon.
   * - **expand-icon** - The icon to show when the control is expanded and collapsed. Rotates on open and close.
   * - **help-text** - Text that describes how to use the input. Alternatively, you can use the `help-text` attribute.
   *
   * ### **CSS Parts:**
   *  - **form-control** - The form control that wraps the label, input, and help text.
   * - **form-control-label** - The label's wrapper.
   * - **form-control-input** - The select's wrapper.
   * - **form-control-help-text** - The help text's wrapper.
   * - **combobox** - The container the wraps the prefix, suffix, combobox, clear icon, and expand button.
   * - **prefix** - The container that wraps the prefix slot.
   * - **suffix** - The container that wraps the suffix slot.
   * - **display-input** - The element that displays the selected option's label, an `<input>` element.
   * - **listbox** - The listbox container where options are slotted.
   * - **tags** - The container that houses option tags when `multiselect` is used.
   * - **tag** - The individual tags that represent each multiselect option.
   * - **tag__base** - The tag's base part.
   * - **tag__content** - The tag's content part.
   * - **tag__remove-button** - The tag's remove button.
   * - **tag__remove-button__base** - The tag's remove button base part.
   * - **clear-button** - The clear button.
   * - **expand-icon** - The container that wraps the expand icon.
   */
  "p-select": DefineComponent<PSelectProps>;

  /**
   * Skeletons are used to provide a visual representation of where content will eventually be drawn.
   * ---
   *
   *
   * ### **CSS Properties:**
   *  - **--border-radius** - The skeleton's border radius. _(default: undefined)_
   * - **--color** - The color of the skeleton. _(default: undefined)_
   * - **--sheen-color** - The sheen color when the skeleton is in its loading state. _(default: undefined)_
   *
   * ### **CSS Parts:**
   *  - **base** - The component's base wrapper.
   * - **indicator** - The skeleton's indicator which is responsible for its color and animation.
   */
  "p-skeleton": DefineComponent<PSkeletonProps>;

  /**
   * Spinners are used to show the progress of an indeterminate operation.
   * ---
   *
   *
   * ### **CSS Properties:**
   *  - **--track-width** - The width of the track. _(default: undefined)_
   * - **--track-color** - The color of the track. _(default: undefined)_
   * - **--indicator-color** - The color of the spinner's indicator. _(default: undefined)_
   * - **--speed** - The time it takes for the spinner to complete one animation cycle. _(default: undefined)_
   *
   * ### **CSS Parts:**
   *  - **base** - The component's base wrapper.
   */
  "p-spinner": DefineComponent<PSpinnerProps>;

  /**
   * Split panels display two adjacent panels, allowing the user to reposition them.
   * ---
   *
   *
   * ### **Events:**
   *  - **p-reposition** - Emitted when the divider's position changes.
   *
   * ### **Slots:**
   *  - **start** - Content to place in the start panel.
   * - **end** - Content to place in the end panel.
   * - **divider** - The divider. Useful for slotting in a custom icon that renders as a handle.
   *
   * ### **CSS Properties:**
   *  - **--divider-width** - The width of the visible divider. _(default: 4px)_
   * - **--divider-hit-area** - The invisible region around the divider where dragging can occur. This is usually wider than the divider to facilitate easier dragging. _(default: 12px)_
   * - **--min** - The minimum allowed size of the primary panel. _(default: 0)_
   * - **--max** - The maximum allowed size of the primary panel. _(default: 100%)_
   *
   * ### **CSS Parts:**
   *  - **start** - The start panel.
   * - **end** - The end panel.
   * - **panel** - Targets both the start and end panels.
   * - **divider** - The divider that separates the start and end panels.
   */
  "p-split-panel": DefineComponent<PSplitPanelProps>;

  /**
   * Switches allow the user to toggle an option on or off.
   * ---
   *
   *
   * ### **Events:**
   *  - **p-blur** - Emitted when the control loses focus.
   * - **p-change** - Emitted when the control's checked state changes.
   * - **p-input** - Emitted when the control receives input.
   * - **p-focus** - Emitted when the control gains focus.
   * - **p-invalid** - Emitted when the form control has been checked for validity and its constraints aren't satisfied.
   *
   * ### **Methods:**
   *  - **click()** - Simulates a click on the switch.
   * - **focus(options: _FocusOptions_)** - Sets focus on the switch.
   * - **blur()** - Removes focus from the switch.
   * - **checkValidity()** - Checks for validity but does not show a validation message. Returns `true` when valid and `false` when invalid.
   * - **getForm(): _HTMLFormElement | null_** - Gets the associated form, if one exists.
   * - **reportValidity()** - Checks for validity and shows the browser's validation message if the control is invalid.
   * - **setCustomValidity(message: _string_)** - Sets a custom validation message. Pass an empty string to restore validity.
   *
   * ### **Slots:**
   *  - _default_ - The switch's label.
   * - **help-text** - Text that describes how to use the switch. Alternatively, you can use the `help-text` attribute.
   *
   * ### **CSS Properties:**
   *  - **--width** - The width of the switch. _(default: undefined)_
   * - **--height** - The height of the switch. _(default: undefined)_
   * - **--thumb-size** - The size of the thumb. _(default: undefined)_
   *
   * ### **CSS Parts:**
   *  - **base** - The component's base wrapper.
   * - **control** - The control that houses the switch's thumb.
   * - **thumb** - The switch's thumb.
   * - **label** - The switch's label.
   * - **form-control-help-text** - The help text's wrapper.
   */
  "p-switch": DefineComponent<PSwitchProps>;

  /**
   * Tabs are used inside [tab groups](/components/tab-group) to represent and activate [tab panels](/components/tab-panel).
   * ---
   *
   *
   * ### **Events:**
   *  - **p-close** - Emitted when the tab is closable and the close button is activated.
   *
   * ### **Slots:**
   *  - _default_ - The tab's label.
   *
   * ### **CSS Parts:**
   *  - **base** - The component's base wrapper.
   * - **close-button** - The close button, an `<p-icon-button>`.
   * - **close-button__base** - The close button's exported `base` part.
   */
  "p-tab": DefineComponent<PTabProps>;

  /**
   * Tab groups organize content into a container that shows one section at a time.
   * ---
   *
   *
   * ### **Events:**
   *  - **p-tab-show** - Emitted when a tab is shown.
   * - **p-tab-hide** - Emitted when a tab is hidden.
   *
   * ### **Methods:**
   *  - **show(panel: _string_)** - Shows the specified tab panel.
   *
   * ### **Slots:**
   *  - _default_ - Used for grouping tab panels in the tab group. Must be `<p-tab-panel>` elements.
   * - **nav** - Used for grouping tabs in the tab group. Must be `<p-tab>` elements.
   *
   * ### **CSS Properties:**
   *  - **--indicator-color** - The color of the active tab indicator. _(default: undefined)_
   * - **--track-color** - The color of the indicator's track (the line that separates tabs from panels). _(default: undefined)_
   * - **--track-width** - The width of the indicator's track (the line that separates tabs from panels). _(default: undefined)_
   *
   * ### **CSS Parts:**
   *  - **base** - The component's base wrapper.
   * - **nav** - The tab group's navigation container where tabs are slotted in.
   * - **tabs** - The container that wraps the tabs.
   * - **active-tab-indicator** - The line that highlights the currently selected tab.
   * - **body** - The tab group's body where tab panels are slotted in.
   * - **scroll-button** - The previous/next scroll buttons that show when tabs are scrollable, an `<p-icon-button>`.
   * - **scroll-button--start** - The starting scroll button.
   * - **scroll-button--end** - The ending scroll button.
   * - **scroll-button__base** - The scroll button's exported `base` part.
   */
  "p-tab-group": DefineComponent<PTabGroupProps>;

  /**
   * Tab panels are used inside [tab groups](/components/tab-group) to display tabbed content.
   * ---
   *
   *
   * ### **Slots:**
   *  - _default_ - The tab panel's content.
   *
   * ### **CSS Properties:**
   *  - **--padding** - The tab panel's padding. _(default: undefined)_
   *
   * ### **CSS Parts:**
   *  - **base** - The component's base wrapper.
   */
  "p-tab-panel": DefineComponent<PTabPanelProps>;

  /**
   * Tags are used as labels to organize things or to indicate a selection.
   * ---
   *
   *
   * ### **Events:**
   *  - **p-remove** - Emitted when the remove button is activated.
   *
   * ### **Slots:**
   *  - _default_ - The tag's content.
   *
   * ### **CSS Parts:**
   *  - **base** - The component's base wrapper.
   * - **content** - The tag's content.
   * - **remove-button** - The tag's remove button, an `<p-icon-button>`.
   * - **remove-button__base** - The remove button's exported `base` part.
   */
  "p-tag": DefineComponent<PTagProps>;

  /**
   * Textareas collect data from the user and allow multiple lines of text.
   * ---
   *
   *
   * ### **Events:**
   *  - **p-blur** - Emitted when the control loses focus.
   * - **p-change** - Emitted when an alteration to the control's value is committed by the user.
   * - **p-focus** - Emitted when the control gains focus.
   * - **p-input** - Emitted when the control receives input.
   * - **p-invalid** - Emitted when the form control has been checked for validity and its constraints aren't satisfied.
   *
   * ### **Methods:**
   *  - **focus(options: _FocusOptions_)** - Sets focus on the textarea.
   * - **blur()** - Removes focus from the textarea.
   * - **select()** - Selects all the text in the textarea.
   * - **scrollPosition(position: _{ top?: number; left?: number }_): _{ top: number; left: number } | undefined_** - Gets or sets the textarea's scroll position.
   * - **setSelectionRange(selectionStart: _number_, selectionEnd: _number_, selectionDirection: _"forward" | "backward" | "none"_)** - Sets the start and end positions of the text selection (0-based).
   * - **setRangeText(replacement: _string_, start: _number_, end: _number_, selectMode: _"select" | "start" | "end" | "preserve"_)** - Replaces a range of text with a new string.
   * - **checkValidity()** - Checks for validity but does not show a validation message. Returns `true` when valid and `false` when invalid.
   * - **getForm(): _HTMLFormElement | null_** - Gets the associated form, if one exists.
   * - **reportValidity()** - Checks for validity and shows the browser's validation message if the control is invalid.
   * - **setCustomValidity(message: _string_)** - Sets a custom validation message. Pass an empty string to restore validity.
   *
   * ### **Slots:**
   *  - **label** - The textarea's label. Alternatively, you can use the `label` attribute.
   * - **help-text** - Text that describes how to use the input. Alternatively, you can use the `help-text` attribute.
   *
   * ### **CSS Parts:**
   *  - **form-control** - The form control that wraps the label, input, and help text.
   * - **form-control-label** - The label's wrapper.
   * - **form-control-input** - The input's wrapper.
   * - **form-control-help-text** - The help text's wrapper.
   * - **base** - The component's base wrapper.
   * - **textarea** - The internal `<textarea>` control.
   */
  "p-textarea": DefineComponent<PTextareaProps>;

  /**
   * Tooltips display additional information based on a specific action.
   * ---
   *
   *
   * ### **Events:**
   *  - **p-show** - Emitted when the tooltip begins to show.
   * - **p-after-show** - Emitted after the tooltip has shown and all animations are complete.
   * - **p-hide** - Emitted when the tooltip begins to hide.
   * - **p-after-hide** - Emitted after the tooltip has hidden and all animations are complete.
   *
   * ### **Methods:**
   *  - **show()** - Shows the tooltip.
   * - **hide()** - Hides the tooltip
   *
   * ### **Slots:**
   *  - _default_ - The tooltip's target element. Avoid slotting in more than one element, as subsequent ones will be ignored.
   * - **content** - The content to render in the tooltip. Alternatively, you can use the `content` attribute.
   *
   * ### **CSS Properties:**
   *  - **--max-width** - The maximum width of the tooltip before its content will wrap. _(default: undefined)_
   * - **--hide-delay** - The amount of time to wait before hiding the tooltip when hovering. _(default: undefined)_
   * - **--show-delay** - The amount of time to wait before showing the tooltip when hovering. _(default: undefined)_
   *
   * ### **CSS Parts:**
   *  - **base** - The component's base wrapper, an `<p-popup>` element.
   * - **base__popup** - The popup's exported `popup` part. Use this to target the tooltip's popup container.
   * - **base__arrow** - The popup's exported `arrow` part. Use this to target the tooltip's arrow.
   * - **body** - The tooltip's body where its content is rendered.
   */
  "p-tooltip": DefineComponent<PTooltipProps>;

  /**
   * Trees allow you to display a hierarchical list of selectable [tree items](/components/tree-item). Items with children can be expanded and collapsed as desired by the user.
   * ---
   *
   *
   * ### **Events:**
   *  - **p-selection-change** - Emitted when a tree item is selected or deselected.
   *
   * ### **Slots:**
   *  - _default_ - The default slot.
   * - **expand-icon** - The icon to show when the tree item is expanded. Works best with `<p-icon>`.
   * - **collapse-icon** - The icon to show when the tree item is collapsed. Works best with `<p-icon>`.
   *
   * ### **CSS Properties:**
   *  - **--indent-size** - The size of the indentation for nested items. _(default: var(--p-spacing-medium))_
   * - **--indent-guide-color** - The color of the indentation line. _(default: var(--p-color-neutral-200))_
   * - **--indent-guide-offset** - The amount of vertical spacing to leave between the top and bottom of the indentation line's starting position. _(default: 0)_
   * - **--indent-guide-style** - The style of the indentation line, e.g. solid, dotted, dashed. _(default: solid)_
   * - **--indent-guide-width** - The width of the indentation line. _(default: 0)_
   *
   * ### **CSS Parts:**
   *  - **base** - The component's base wrapper.
   */
  "p-tree": DefineComponent<PTreeProps>;

  /**
   * A tree item serves as a hierarchical node that lives inside a [tree](/components/tree).
   * ---
   *
   *
   * ### **Events:**
   *  - **p-expand** - Emitted when the tree item expands.
   * - **p-after-expand** - Emitted after the tree item expands and all animations are complete.
   * - **p-collapse** - Emitted when the tree item collapses.
   * - **p-after-collapse** - Emitted after the tree item collapses and all animations are complete.
   * - **p-lazy-change** - Emitted when the tree item's lazy state changes.
   * - **p-lazy-load** - Emitted when a lazy item is selected. Use this event to asynchronously load data and append items to the tree before expanding. After appending new items, remove the `lazy` attribute to remove the loading state and update the tree.
   *
   * ### **Methods:**
   *  - **getChildrenItems({ includeDisabled = true }: _{ includeDisabled?: boolean }_): _PTreeItem[]_** - Gets all the nested tree items in this node.
   *
   * ### **Slots:**
   *  - _default_ - The default slot.
   * - **expand-icon** - The icon to show when the tree item is expanded.
   * - **collapse-icon** - The icon to show when the tree item is collapsed.
   *
   * ### **CSS Parts:**
   *  - **base** - The component's base wrapper.
   * - **item** - The tree item's container. This element wraps everything except slotted tree item children.
   * - **item--disabled** - Applied when the tree item is disabled.
   * - **item--expanded** - Applied when the tree item is expanded.
   * - **item--indeterminate** - Applied when the selection is indeterminate.
   * - **item--selected** - Applied when the tree item is selected.
   * - **indentation** - The tree item's indentation container.
   * - **expand-button** - The container that wraps the tree item's expand button and spinner.
   * - **spinner** - The spinner that shows when a lazy tree item is in the loading state.
   * - **spinner__base** - The spinner's base part.
   * - **label** - The tree item's label.
   * - **children** - The container that wraps the tree item's nested children.
   * - **checkbox** - The checkbox that shows when using multiselect.
   * - **checkbox__base** - The checkbox's exported `base` part.
   * - **checkbox__control** - The checkbox's exported `control` part.
   * - **checkbox__control--checked** - The checkbox's exported `control--checked` part.
   * - **checkbox__control--indeterminate** - The checkbox's exported `control--indeterminate` part.
   * - **checkbox__checked-icon** - The checkbox's exported `checked-icon` part.
   * - **checkbox__indeterminate-icon** - The checkbox's exported `indeterminate-icon` part.
   * - **checkbox__label** - The checkbox's exported `label` part.
   */
  "p-tree-item": DefineComponent<PTreeItemProps>;

  /**
   * The visually hidden utility makes content accessible to assistive devices without displaying it on the screen.
   * ---
   *
   *
   * ### **Slots:**
   *  - _default_ - The content to be visually hidden.
   */
  "p-visually-hidden": DefineComponent<PVisuallyHiddenProps>;
};

declare module "vue" {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface GlobalComponents extends CustomElements {}
}

declare global {
  namespace JSX {
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface IntrinsicElements extends CustomElements {}
  }
}
