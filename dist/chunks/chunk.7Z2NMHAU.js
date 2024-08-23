import {
  debounce
} from "./chunk.NOWCQZBS.js";
import {
  PTag
} from "./chunk.WBP7LNZ6.js";
import {
  o
} from "./chunk.3S6YHFO5.js";
import {
  scrollIntoView
} from "./chunk.TQQ6S3EH.js";
import {
  PPopup
} from "./chunk.YRCSKH6R.js";
import {
  defaultValue
} from "./chunk.XHCU632S.js";
import {
  form_control_styles_default
} from "./chunk.IKYLUPM6.js";
import {
  FormControlController
} from "./chunk.OOSITRNG.js";
import {
  calendar_styles_default
} from "./chunk.36YEJPZZ.js";
import {
  getAnimation,
  setDefaultAnimation
} from "./chunk.F6XYW4W5.js";
import {
  waitForEvent
} from "./chunk.B4BZKR24.js";
import {
  animateTo,
  stopAnimations
} from "./chunk.S7GYYU7Z.js";
import {
  HasSlotController
} from "./chunk.MLXUTV4G.js";
import {
  LocalizeController
} from "./chunk.FMGP5ZX5.js";
import {
  e
} from "./chunk.CEXDE6O2.js";
import {
  PIcon
} from "./chunk.OHNLE4XV.js";
import {
  watch
} from "./chunk.FA5RT4K4.js";
import {
  PureElement,
  e as e2,
  n,
  r
} from "./chunk.CXJCNOP2.js";
import {
  component_styles_default
} from "./chunk.4LEQW7ML.js";
import {
  x
} from "./chunk.YOCEZMWG.js";
import {
  __decorateClass
} from "./chunk.KIILAQWQ.js";

// src/internal/calendar.ts
function generateCalendarGrid(year, month, options) {
  const weekStartsWith = (options == null ? void 0 : options.weekStartsWith) || "sunday";
  const today = /* @__PURE__ */ new Date();
  const dayThisMonthStartsWith = new Date(year, month - 1, 1).getDay();
  const lastDayOfMonth = new Date(year, month, 0).getDate();
  const lastDayOfPreviousMonth = month === 1 ? new Date(year - 1, 1, 0).getDate() : new Date(year, month - 1, 0).getDate();
  const dayGrid = [];
  let day = 1;
  do {
    const date = new Date(year, month - 1, day);
    let dayOfWeek = new Date(year, month - 1, day).getDay();
    if (weekStartsWith === "sunday") {
    }
    if (day === 1) {
      let lastMonthDay = lastDayOfPreviousMonth - dayThisMonthStartsWith + 1;
      for (let i = 0; i < dayThisMonthStartsWith; i++) {
        const dayOfLastMonth = new Date(year, month - 2, lastMonthDay);
        dayGrid.push({
          date: dayOfLastMonth,
          isToday: isSameDay(dayOfLastMonth, today),
          isWeekday: isWeekday(dayOfLastMonth),
          isWeekend: isWeekend(dayOfLastMonth),
          isCurrentMonth: false,
          isPreviousMonth: true,
          isNextMonth: false
        });
        lastMonthDay++;
      }
    }
    dayGrid.push({
      date,
      isToday: isSameDay(date, today),
      isWeekday: isWeekday(date),
      isWeekend: isWeekend(date),
      isCurrentMonth: true,
      isPreviousMonth: false,
      isNextMonth: false
    });
    if (day === lastDayOfMonth) {
      let nextMonthDay = 1;
      for (dayOfWeek; dayOfWeek < 6; dayOfWeek++) {
        const dayOfNextMonth = new Date(year, month, nextMonthDay);
        dayGrid.push({
          date: dayOfNextMonth,
          isToday: isSameDay(dayOfNextMonth, today),
          isWeekday: isWeekday(dayOfNextMonth),
          isWeekend: isWeekend(dayOfNextMonth),
          isCurrentMonth: false,
          isPreviousMonth: false,
          isNextMonth: true
        });
        nextMonthDay++;
      }
    }
    day++;
  } while (day <= lastDayOfMonth);
  return dayGrid;
}
function getAllDayNames(locale = "en", format = "long") {
  const formatter = new Intl.DateTimeFormat(locale, {
    weekday: format,
    timeZone: "UTC"
  });
  const days = [1, 2, 3, 4, 5, 6, 7].map((day) => {
    const dd = day < 10 ? `0${day}` : day;
    return /* @__PURE__ */ new Date(`2017-01-${dd}T00:00:00+00:00`);
  });
  return days.map((date) => formatter.format(date));
}
function getAllMonthNames(locale = "en", format = "long") {
  const formatter = new Intl.DateTimeFormat(locale, {
    month: format,
    timeZone: "UTC"
  });
  const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((month) => {
    const mm = month < 10 ? `0${month}` : month;
    return /* @__PURE__ */ new Date(`2017-${mm}-01T00:00:00+00:00`);
  });
  return months.map((date) => formatter.format(date));
}
function isSameDay(date1, date2) {
  return date1.getFullYear() === date2.getFullYear() && date1.getMonth() === date2.getMonth() && date1.getDate() === date2.getDate();
}
function isWeekend(date) {
  const day = date.getDay();
  return day === 0 || day === 6;
}
function isWeekday(date) {
  const day = date.getDay();
  return day > 0 && day < 6;
}
function getMonthName(date, locale = "en", format = "long") {
  return getAllMonthNames(locale, format)[date.getMonth()];
}

// src/internal/part-map.ts
function partMap(map) {
  const parts = [];
  for (const [key, value] of Object.entries(map)) {
    if (value) {
      parts.push(key);
    }
  }
  return parts.join(" ");
}

// src/components/calendar/calendar.component.ts
var PCalendar = class extends PureElement {
  constructor() {
    super(...arguments);
    this.formControlController = new FormControlController(this, {
      assumeInteractionOn: ["p-blur", "p-input", "p-select"]
    });
    this.localize = new LocalizeController(this);
    this.hasSlotController = new HasSlotController(this, "prefix", "suffix");
    this.keyword = "";
    this.formatter = "YYYY-MM-DD";
    this.typing = true;
    this.hasFocus = false;
    this.displayLabel = "";
    this.selectedOptions = [];
    this.name = "";
    this.value = [];
    this.defaultValue = /* @__PURE__ */ new Date();
    this.size = "medium";
    this.placeholder = "DD/MM/YYYY";
    this.maxOptionsVisible = 3;
    this.disabled = false;
    this.clearable = false;
    this.open = false;
    this.hoist = false;
    this.filled = false;
    this.pill = false;
    this.label = "";
    this.placement = "bottom";
    this.helpText = "";
    this.form = "";
    this.required = false;
    this.getTag = (option) => {
      return x`
      <p-tag
        part="tag"
        exportparts="
              base:tag__base,
              content:tag__content,
              remove-button:tag__remove-button,
              remove-button__base:tag__remove-button__base
            "
        ?pill=${this.pill}
        size=${this.size}
        removable
        @p-remove=${(event) => {
        console.log("remove", event);
      }}
      >
        ${option.getTextLabel()}
      </p-tag>
    `;
    };
    this.showToday = false;
    this.mode = "default";
    this.type = "single";
    this.autofocus = false;
    this.month = (/* @__PURE__ */ new Date()).getMonth() + 1;
    this.year = (/* @__PURE__ */ new Date()).getFullYear();
    this.date = (/* @__PURE__ */ new Date()).getDate();
    this.dayLabels = "short";
    this.monthLabels = "long";
    this.showAdjacentDates = false;
    this.handleDocumentFocusIn = (event) => {
      const path = event.composedPath();
      if (this && !path.includes(this)) {
        this.hide();
      }
    };
    this.handleDocumentKeyDown = (event) => {
      const target = event.target;
      const isClearButton = target.closest(".calendar__clear") !== null;
      const isIconButton = target.closest("p-icon-button") !== null;
      if (isClearButton || isIconButton) {
        return;
      }
      if (event.key === "Escape" && this.open && !this.closeWatcher) {
        event.preventDefault();
        event.stopPropagation();
        this.hide();
        return;
      }
      if (event.key === "Enter") {
        event.preventDefault();
        event.stopImmediatePropagation();
        if (!this.open) {
          this.show();
          return;
        }
        if (this.currentOption && !this.currentOption.disabled && this.open) {
          if (this.type === "multiple") {
            this.toggleOptionSelection(this.currentOption);
            if (!document.activeElement || document.activeElement !== this.displayInput) {
              this.displayInput.focus({ preventScroll: true });
            }
            this.hasFocus = true;
          } else {
            this.setSelectedOptions(this.currentOption);
            this.hide();
          }
          this.updateComplete.then(() => {
            this.emit("p-input");
            this.emit("p-change");
          });
        }
        return;
      }
      if (["ArrowUp", "ArrowDown", "Home", "End"].includes(event.key)) {
        const allOptions = this.getAllOptions();
        allOptions.forEach((option) => {
          option.hidden = !option.getTextLabel().toLowerCase().includes(this.keyword.toLowerCase()) && !option.value.toLowerCase().includes(this.keyword.toLowerCase());
        });
        const availableOptions = allOptions.filter((el) => !el.hidden);
        const currentIndex = availableOptions.indexOf(this.currentOption);
        let newIndex = Math.max(0, currentIndex);
        event.preventDefault();
        if (!this.open) {
          this.show();
          if (this.currentOption) {
            return;
          }
        }
        if (event.key === "ArrowDown") {
          newIndex = currentIndex + 1;
          if (newIndex > availableOptions.length - 1)
            newIndex = 0;
        } else if (event.key === "ArrowUp") {
          newIndex = currentIndex - 1;
          if (newIndex < 0)
            newIndex = availableOptions.length - 1;
        } else if (event.key === "Home") {
          newIndex = 0;
        } else if (event.key === "End") {
          newIndex = availableOptions.length - 1;
        }
        this.setCurrentOption(availableOptions[newIndex]);
        return;
      }
      if (event.key === "Backspace") {
        if (!this.open && this.hasFocus) {
          this.show();
        }
        event.stopPropagation();
        if (this.type === "multiple" && this.keyword === "") {
          const allOptions = this.getAllOptions();
          const optionsSelected = allOptions.filter((el) => el.selected);
          if (optionsSelected.length > 0) {
            this.handleTagRemove(new CustomEvent("p-remove"), optionsSelected[optionsSelected.length - 1]);
          }
        }
        return;
      }
      if (event.key.length === 1) {
        if (!this.open && this.hasFocus) {
          this.show();
        }
      }
    };
    this.handleDocumentMouseDown = (event) => {
      const path = event.composedPath();
      if (this && !path.includes(this)) {
        this.hide();
      }
    };
  }
  /** Gets the validity state object */
  get validity() {
    return this.valueInput.validity;
  }
  /** Gets the validation message */
  get validationMessage() {
    return this.valueInput.validationMessage;
  }
  connectedCallback() {
    super.connectedCallback();
    this.open = false;
  }
  addOpenListeners() {
    var _a;
    document.addEventListener("focusin", this.handleDocumentFocusIn);
    document.addEventListener("keydown", this.handleDocumentKeyDown);
    document.addEventListener("mousedown", this.handleDocumentMouseDown);
    if (this.getRootNode() !== document) {
      this.getRootNode().addEventListener("focusin", this.handleDocumentFocusIn);
    }
    if ("CloseWatcher" in window) {
      (_a = this.closeWatcher) == null ? void 0 : _a.destroy();
      this.closeWatcher = new CloseWatcher();
      this.closeWatcher.onclose = () => {
        if (this.open) {
          this.hide();
          if (!document.activeElement || document.activeElement !== this.displayInput) {
            this.displayInput.focus({ preventScroll: true });
          }
        }
      };
    }
  }
  removeOpenListeners() {
    var _a;
    document.removeEventListener("focusin", this.handleDocumentFocusIn);
    document.removeEventListener("keydown", this.handleDocumentKeyDown);
    document.removeEventListener("mousedown", this.handleDocumentMouseDown);
    if (this.getRootNode() !== document) {
      this.getRootNode().removeEventListener("focusin", this.handleDocumentFocusIn);
    }
    (_a = this.closeWatcher) == null ? void 0 : _a.destroy();
  }
  handleFocus() {
    this.hasFocus = true;
    this.emit("p-focus");
  }
  handleBlur() {
    this.hasFocus = false;
    if (!(this.type === "multiple")) {
      this.displayLabel = this.selectedOptions.map((option) => option.getTextLabel()).join(", ");
    } else {
      this.displayLabel = " ";
    }
    this.emit("p-blur");
  }
  handleInput() {
    this.keyword = this.displayInput.value;
    if (document.activeElement !== this.displayInput) {
      this.displayInput.focus({ preventScroll: true });
    }
    this.emit("p-input");
  }
  handleLabelClick() {
    var _a;
    if (!document.activeElement || document.activeElement !== this.displayInput) {
      (_a = this.displayInput) == null ? void 0 : _a.focus();
    }
  }
  handleComboboxMouseDown(event) {
    const path = event.composedPath();
    const isIconButton = path.some((el) => el instanceof Element && el.tagName.toLowerCase() === "p-icon-button");
    if (this.disabled || isIconButton) {
      return;
    }
    event.preventDefault();
    event.stopPropagation();
    this.open = !this.open;
  }
  handleComboboxKeyDown(event) {
    if (event.key === "Tab") {
      return;
    }
    event.stopPropagation();
    this.handleDocumentKeyDown(event);
  }
  handleClearClick(event) {
    event.stopPropagation();
    if (String(this.value) !== "") {
      this.displayInput.blur();
      this.updateComplete.then(() => {
        this.emit("p-clear");
        this.emit("p-input");
        this.emit("p-change");
      });
    }
  }
  handleClearMouseDown(event) {
    event.stopPropagation();
    event.preventDefault();
  }
  handleOptionClick(event) {
    const target = event.target;
    console.log(target);
    const option = target.closest("p-option");
    const oldValue = this.value;
    if (option && !option.disabled) {
      if (this.type === "multiple") {
        this.toggleOptionSelection(option);
      } else {
        this.setSelectedOptions(option);
      }
      this.updateComplete.then(() => this.displayInput.focus({ preventScroll: true }));
      if (this.value !== oldValue) {
        this.updateComplete.then(() => {
          this.emit("p-input");
          this.emit("p-change");
        });
      }
      if (this.type !== "multiple") {
        this.hide();
        this.displayInput.blur();
      }
    }
  }
  handleTagRemove(event, option) {
    event.stopPropagation();
    console.log("handleTagRemove", option);
    if (!this.disabled) {
      this.updateComplete.then(() => {
        this.emit("p-input");
        this.emit("p-change");
      });
    }
  }
  // Gets an array of all <p-option> elements
  getAllOptions() {
    return [...this.querySelectorAll("button[part='day']")];
  }
  // Sets the current option, which is the option the user is currently interacting with (e.g. via keyboard). Only one
  // option may be "current" at a time.
  setCurrentOption(option) {
    const allOptions = this.getAllOptions();
    allOptions.forEach((el) => {
      el.current = false;
      el.tabIndex = -1;
    });
    if (option) {
      this.currentOption = option;
      option.current = true;
      option.tabIndex = 0;
      option.focus();
    }
  }
  // Sets the selected option(s)
  setSelectedOptions(option) {
    const allOptions = this.getAllOptions();
    const newSelectedOptions = Array.isArray(option) ? option : [option];
    allOptions.forEach((el) => el.selected = false);
    if (newSelectedOptions.length) {
      newSelectedOptions.forEach((el) => el.selected = true);
    }
    this.selectionChanged();
  }
  // Toggles an option's selected state
  toggleOptionSelection(option, force) {
    if (force === true || force === false) {
      option.selected = force;
    } else {
      option.selected = !option.selected;
    }
    this.selectionChanged();
  }
  // This method must be called whenever the selection changes. It will update the selected options cache, the current
  // value, and the display value
  selectionChanged() {
    this.updateComplete.then(() => {
      this.formControlController.updateValidity();
    });
  }
  get tags() {
    return this.selectedOptions.map((option, index) => {
      if (index < this.maxOptionsVisible || this.maxOptionsVisible <= 0) {
        const tag = this.getTag(option, index);
        return x`<div
          @p-remove=${(e3) => {
          console.log("handleTagRemove", e3);
        }}
        >
          ${typeof tag === "string" ? o(tag) : tag}
        </div>`;
      } else if (index === this.maxOptionsVisible) {
        return x`
          <p-dropdown placement="top" active>
            <p-tag slot="trigger" size=${this.size}>+${this.selectedOptions.length - index}</p-tag>
            <div class="calendar__tags--overflow" @click=${(e3) => e3.stopPropagation()}>
              ${this.selectedOptions.slice(this.maxOptionsVisible).map((other, idx) => {
          const otherTag = this.getTag(other, this.maxOptionsVisible + idx);
          return x`<div
                  @p-remove=${(e3) => {
            console.log("handleTagRemove", e3);
          }}
                >
                  ${typeof otherTag === "string" ? o(otherTag) : otherTag}
                </div>`;
        })}
            </div>
          </p-dropdown>
        `;
      }
      return x``;
    });
  }
  handleInvalid(event) {
    this.formControlController.setValidity(false);
    this.formControlController.emitInvalidEvent(event);
  }
  handleDisabledChange() {
    if (this.mode === "inline") {
      return;
    }
    if (this.disabled) {
      this.open = false;
      this.handleOpenChange();
    }
  }
  handleValueChange() {
  }
  async handleOpenChange() {
    if (this.mode === "inline") {
      return;
    }
    if (this.open && !this.disabled) {
      this.emit("p-show");
      this.addOpenListeners();
      await stopAnimations(this);
      this.calendar.hidden = false;
      this.popup.active = true;
      requestAnimationFrame(() => {
        this.setCurrentOption(this.currentOption);
      });
      const { keyframes, options } = getAnimation(this, "calendar.show", {
        dir: this.localize.dir()
      });
      await animateTo(this.popup.popup, keyframes, options);
      if (this.currentOption) {
        scrollIntoView(this.currentOption, this.calendar, "vertical", "auto");
      }
      this.emit("p-after-show");
      if (this.typing) {
        if (this.selectedOptions.length > 0) {
          if (this.type === "multiple") {
            this.placeholder = this.localize.term("numOptionsSelected", this.selectedOptions.length);
          } else {
            this.placeholder = this.selectedOptions[0].getTextLabel();
          }
        }
        this.displayLabel = "";
        this.keyword = "";
      }
      if (!document.activeElement || document.activeElement !== this.displayInput) {
        this.displayInput.focus({ preventScroll: true });
      }
      const allOptions = this.getAllOptions();
      allOptions.forEach((option) => {
        option.hidden = false;
      });
    } else {
      this.emit("p-hide");
      this.removeOpenListeners();
      await stopAnimations(this);
      const { keyframes, options } = getAnimation(this, "calendar.hide", {
        dir: this.localize.dir()
      });
      await animateTo(this.popup.popup, keyframes, options);
      this.calendar.hidden = true;
      this.popup.active = false;
      this.emit("p-after-hide");
      this.keyword = "";
    }
  }
  /** Shows the calendar. */
  async show() {
    if (this.open || this.disabled) {
      this.open = false;
      return void 0;
    }
    this.open = true;
    return waitForEvent(this, "p-after-show");
  }
  /** Hides the calendar. */
  async hide() {
    if (!this.open || this.disabled) {
      this.open = false;
      return void 0;
    }
    this.open = false;
    return waitForEvent(this, "p-after-hide");
  }
  /** Checks for validity but does not show a validation message. Returns `true` when valid and `false` when invalid. */
  checkValidity() {
    return this.valueInput.checkValidity();
  }
  /** Gets the associated form, if one exists. */
  getForm() {
    return this.formControlController.getForm();
  }
  /** Checks for validity and shows the browser's validation message if the control is invalid. */
  reportValidity() {
    return this.valueInput.reportValidity();
  }
  /** Sets a custom validation message. Pass an empty string to restore validity. */
  setCustomValidity(message) {
    this.valueInput.setCustomValidity(message);
    this.formControlController.updateValidity();
  }
  /** Sets focus on the control. */
  focus(options) {
    this.displayInput.focus(options);
  }
  /** Removes focus from the control. */
  blur() {
    this.displayInput.blur();
  }
  /** Moves the calendar to the current month and year. */
  goToToday() {
    this.month = (/* @__PURE__ */ new Date()).getMonth() + 1;
    this.year = (/* @__PURE__ */ new Date()).getFullYear();
    this.date = (/* @__PURE__ */ new Date()).getDate();
  }
  /** Moves the calendar to the previous month. */
  goToPreviousMonth() {
    if (this.month === 1) {
      this.month = 12;
      this.year--;
    } else {
      this.month--;
    }
  }
  /** Moves the calendar to the next month. */
  goToNextMonth() {
    if (this.month === 12) {
      this.month = 1;
      this.year++;
    } else {
      this.month++;
    }
  }
  /** Moves the calendar to the previous year. */
  goToPreviousYear() {
    if (this.year <= 1970)
      return;
    this.year--;
  }
  /** Moves the calendar to the next year. */
  goToNextYear() {
    this.year++;
  }
  handleMonthChange() {
    this.emit("p-change");
  }
  render() {
    if (this.month < 1 || this.month > 12) {
      throw new Error(`The value "${this.month}" is not a valid month.`);
    }
    const lang = this.lang || document.documentElement.lang;
    const month = new Date(this.year, this.month - 1, 1);
    const dayGrid = generateCalendarGrid(this.year, this.month);
    const dayNames = getAllDayNames(lang, this.dayLabels);
    const hasLabelSlot = this.hasSlotController.test("label");
    const hasHelpTextSlot = this.hasSlotController.test("help-text");
    const hasLabel = this.label ? true : !!hasLabelSlot;
    const hasHelpText = this.helpText ? true : !!hasHelpTextSlot;
    const hasClearIcon = this.clearable && !this.disabled && this.value.length > 0;
    const isPlaceholderVisible = this.placeholder && this.value.length === 0;
    const calendarInline = x`
      <div
        id="calendar"
        part="calendar"
        role="listbox"
        class=${e({
      "calendar--dialog": true,
      "calendar--has-footer": this.hasSlotController.test("footer"),
      "calendar--show-adjacent-dates": this.showAdjacentDates,
      "calendar--dialog-inline": this.mode === "inline"
    })}
        aria-expanded=${this.open ? "true" : "false"}
        aria-multiselectable=${this.type === "multiple" ? "true" : "false"}
        aria-labelledby="label"
        tabindex="-1"
        @mouseup=${this.handleOptionClick}
      >
        <header class="calendar__header">
          <p-button
            variant="default"
            size="small"
            @click=${this.goToPreviousYear}
            class=${e({
      "calendar__header-button": true,
      "calendar__header-button--disabled": this.disabled
    })}
          >
            <p-icon-button name="chevron-double-left" label=${this.localize.term("previousMonth")}></p-icon-button>
          </p-button>
          <p-button
            variant="default"
            size="small"
            @click=${this.goToPreviousMonth}
            class=${e({
      "calendar__header-button": true,
      "calendar__header-button--disabled": this.disabled
    })}
          >
            <p-icon-button name="chevron-left" label=${this.localize.term("previousMonth")}></p-icon-button>
          </p-button>

          <slot name="header-prefix"></slot>

          <span class="calendar__label">
            <span class="calendar__month-label">${getMonthName(month, lang, this.monthLabels)}</span>
            <span class="calendar__year-label">${month.getFullYear()}</span>
          </span>

          <slot name="suffix-prefix"></slot>

          <p-button
            variant="default"
            size="small"
            @click=${this.goToNextMonth}
            class=${e({
      "calendar__header-button": true,
      "calendar__header-button--disabled": this.disabled
    })}
          >
            <p-icon-button name="chevron-right" label=${this.localize.term("nextMonth")}></p-icon-button>
          </p-button>
          <p-button
            variant="default"
            size="small"
            @click=${this.goToNextYear}
            class=${e({
      "calendar__header-button": true,
      "calendar__header-button--disabled": this.disabled
    })}
          >
            <p-icon-button name="chevron-double-right" label=${this.localize.term("nextMonth")}></p-icon-button>
          </p-button>
        </header>

        <div class="calendar__days">
          ${[0, 1, 2, 3, 4, 5, 6].map((day) => {
      return x`
              <span
                part=${partMap({
        day: true,
        "day-label": true,
        "day-weekday": day > 0 && day < 6,
        "day-weekend": day === 0 || day === 6
      })}
                class="calendar__day"
              >
                ${dayNames[day]}
              </span>
            `;
    })}
          ${dayGrid.map((day, index) => {
      if (day.isCurrentMonth || this.showAdjacentDates) {
        const isSelected = Array.isArray(this.value) ? this.value.some((d) => isSameDay(d, day.date)) : false;
        const previousDay = index > 0 ? dayGrid[index - 1] : null;
        const nextDay = index < dayGrid.length - 1 ? dayGrid[index + 1] : null;
        const isSelectionStart = isSelected && previousDay ? !this.value.some((d) => isSameDay(d, previousDay.date)) : false;
        const isSelectionEnd = isSelected && nextDay ? !this.value.some((d) => isSameDay(d, nextDay.date)) : false;
        return x`
                <button
                  type="button"
                  part=${partMap({
          day: true,
          "day-current-month": day.isCurrentMonth,
          "day-previous-month": day.isPreviousMonth,
          "day-next-month": day.isNextMonth,
          "day-today": day.isToday,
          "day-weekday": day.isWeekday,
          "day-weekend": day.isWeekend,
          "day-selected": isSelected,
          "day-selection-start": isSelectionStart,
          "day-selection-end": isSelectionEnd
        })}
                  class="calendar__day"
                >
                  ${day.date.getDate()}
                </button>
              `;
      }
      return x` <div class="calendar__day calendar__day--empty"></div> `;
    })}
        </div>

        <footer class="calendar__footer">
          ${this.showToday ? x`
                <p-button
                  @click=${this.goToToday}
                  variant="primary"
                  size="small"
                  class=${e({
      "calendar__today-button": true,
      "calendar__today-button--disabled": this.disabled
    })}
                  >${this.localize.term("today")}
                </p-button>
              ` : null}
          <slot name="footer"></slot>
        </footer>
      </div>
    `;
    return x`
      <div
        part="form-control"
        class=${e({
      "form-control": true,
      "form-control--small": this.size === "small",
      "form-control--medium": this.size === "medium",
      "form-control--large": this.size === "large",
      "form-control--has-label": hasLabel,
      "form-control--has-help-text": hasHelpText
    })}
      >
        <label
          id="label"
          part="form-control-label"
          class="form-control__label"
          aria-hidden=${hasLabel ? "false" : "true"}
          @click=${this.handleLabelClick}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          ${this.mode === "inline" ? calendarInline : x`
                <p-popup
                  class=${e({
      calendar: true,
      "calendar--standard": true,
      "calendar--filled": this.filled,
      "calendar--pill": this.pill,
      "calendar--open": this.open,
      "calendar--disabled": this.disabled,
      "calendar--multiple": this.type === "multiple",
      "calendar--focused": this.hasFocus,
      "calendar--placeholder-visible": isPlaceholderVisible,
      "calendar--top": this.placement === "top",
      "calendar--bottom": this.placement === "bottom",
      "calendar--small": this.size === "small",
      "calendar--medium": this.size === "medium",
      "calendar--large": this.size === "large"
    })}
                  placement=${this.placement}
                  strategy=${this.hoist ? "fixed" : "absolute"}
                  flip
                  shift
                  sync="width"
                  auto-size="vertical"
                  auto-size-padding="10"
                >
                  <div
                    part="combobox"
                    class="calendar__combobox"
                    slot="anchor"
                    @keydown=${this.handleComboboxKeyDown}
                    @mousedown=${this.handleComboboxMouseDown}
                  >
                    <slot part="prefix" name="prefix" class="calendar__prefix">
                      <span class="calendar__icon">
                        ${this.type === "multiple" ? x`<p-icon name="calendar-week"></p-icon>` : this.type === "range" ? x`<p-icon name="calendar-range"></p-icon>` : x`<p-icon name="calendar-day"></p-icon>`}
                      </span>
                    </slot>

                    ${this.type === "multiple" ? x`<div part="tags" class="calendar__tags">${this.tags}</div>` : ""}

                    <input
                      part="display-input"
                      class="calendar__display-input"
                      type="text"
                      placeholder=${this.placeholder}
                      .disabled=${this.disabled}
                      .value=${this.hasFocus ? this.keyword : this.displayLabel}
                      autocomplete="off"
                      spellcheck="false"
                      autocapitalize="off"
                      aria-controls="calendar"
                      aria-expanded=${this.open ? "true" : "false"}
                      aria-haspopup="dialog"
                      aria-labelledby="label"
                      aria-disabled=${this.disabled ? "true" : "false"}
                      aria-describedby="help-text"
                      ?readonly=${!this.typing}
                      role="combobox"
                      tabindex="0"
                      @focus=${this.handleFocus}
                      @blur=${this.handleBlur}
                      @input=${this.handleInput}
                    />

                    <input
                      class="calendar__value-input"
                      type="text"
                      ?disabled=${this.disabled}
                      ?required=${this.required}
                      .value=${Array.isArray(this.value) ? this.value.join(", ") : this.value}
                      tabindex="-1"
                      aria-hidden="true"
                      @focus=${() => this.focus()}
                      @invalid=${this.handleInvalid}
                    />

                    ${hasClearIcon ? x`
                          <button
                            part="clear-button"
                            class="calendar__clear"
                            type="button"
                            aria-label=${this.localize.term("clearEntry")}
                            @mousedown=${this.handleClearMouseDown}
                            @click=${this.handleClearClick}
                            tabindex="-1"
                          >
                            <slot name="clear-icon">
                              <p-icon name="x-circle-fill" library="system"></p-icon>
                            </slot>
                          </button>
                        ` : ""}

                    <slot name="suffix" part="suffix" class="calendar__suffix"></slot>
                  </div>

                  ${calendarInline}
                </p-popup>
              `}
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${hasHelpText ? "false" : "true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `;
  }
};
PCalendar.styles = [component_styles_default, form_control_styles_default, calendar_styles_default];
PCalendar.dependencies = {
  "p-icon": PIcon,
  "p-popup": PPopup,
  "p-tag": PTag
};
__decorateClass([
  e2(".calendar")
], PCalendar.prototype, "popup", 2);
__decorateClass([
  e2(".calendar__combobox")
], PCalendar.prototype, "combobox", 2);
__decorateClass([
  e2(".calendar__display-input")
], PCalendar.prototype, "displayInput", 2);
__decorateClass([
  e2(".calendar__value-input")
], PCalendar.prototype, "valueInput", 2);
__decorateClass([
  e2(".calendar--dialog")
], PCalendar.prototype, "calendar", 2);
__decorateClass([
  n({ reflect: true })
], PCalendar.prototype, "formatter", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], PCalendar.prototype, "typing", 2);
__decorateClass([
  r()
], PCalendar.prototype, "hasFocus", 2);
__decorateClass([
  r()
], PCalendar.prototype, "displayLabel", 2);
__decorateClass([
  r()
], PCalendar.prototype, "currentOption", 2);
__decorateClass([
  r()
], PCalendar.prototype, "selectedOptions", 2);
__decorateClass([
  n()
], PCalendar.prototype, "name", 2);
__decorateClass([
  n({ type: Array })
], PCalendar.prototype, "value", 2);
__decorateClass([
  defaultValue()
], PCalendar.prototype, "defaultValue", 2);
__decorateClass([
  n({ reflect: true })
], PCalendar.prototype, "size", 2);
__decorateClass([
  n()
], PCalendar.prototype, "placeholder", 2);
__decorateClass([
  n({ attribute: "max-options-visible", type: Number })
], PCalendar.prototype, "maxOptionsVisible", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], PCalendar.prototype, "disabled", 2);
__decorateClass([
  n({ type: Boolean })
], PCalendar.prototype, "clearable", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], PCalendar.prototype, "open", 2);
__decorateClass([
  n({ type: Boolean })
], PCalendar.prototype, "hoist", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], PCalendar.prototype, "filled", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], PCalendar.prototype, "pill", 2);
__decorateClass([
  n()
], PCalendar.prototype, "label", 2);
__decorateClass([
  n({ reflect: true })
], PCalendar.prototype, "placement", 2);
__decorateClass([
  n({ attribute: "help-text" })
], PCalendar.prototype, "helpText", 2);
__decorateClass([
  n({ reflect: true })
], PCalendar.prototype, "form", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], PCalendar.prototype, "required", 2);
__decorateClass([
  n()
], PCalendar.prototype, "getTag", 2);
__decorateClass([
  n({ type: Boolean, reflect: true, attribute: "show-today" })
], PCalendar.prototype, "showToday", 2);
__decorateClass([
  n({ reflect: true })
], PCalendar.prototype, "mode", 2);
__decorateClass([
  n({ reflect: true })
], PCalendar.prototype, "type", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], PCalendar.prototype, "autofocus", 2);
__decorateClass([
  n({ type: Number, reflect: true })
], PCalendar.prototype, "month", 2);
__decorateClass([
  n({ type: Number, reflect: true })
], PCalendar.prototype, "year", 2);
__decorateClass([
  n({ type: Number, reflect: true })
], PCalendar.prototype, "date", 2);
__decorateClass([
  n({ attribute: "day-labels" })
], PCalendar.prototype, "dayLabels", 2);
__decorateClass([
  n({ attribute: "month-labels" })
], PCalendar.prototype, "monthLabels", 2);
__decorateClass([
  n({ attribute: "show-adjacent-dates", type: Boolean })
], PCalendar.prototype, "showAdjacentDates", 2);
__decorateClass([
  debounce(100)
], PCalendar.prototype, "handleInput", 1);
__decorateClass([
  watch("disabled", { waitUntilFirstUpdate: true })
], PCalendar.prototype, "handleDisabledChange", 1);
__decorateClass([
  watch("value", { waitUntilFirstUpdate: true })
], PCalendar.prototype, "handleValueChange", 1);
__decorateClass([
  watch("open", { waitUntilFirstUpdate: true })
], PCalendar.prototype, "handleOpenChange", 1);
__decorateClass([
  watch("month"),
  watch("year")
], PCalendar.prototype, "handleMonthChange", 1);
setDefaultAnimation("calendar.show", {
  keyframes: [
    { opacity: 0, scale: 0.9 },
    { opacity: 1, scale: 1 }
  ],
  options: { duration: 100, easing: "ease" }
});
setDefaultAnimation("calendar.hide", {
  keyframes: [
    { opacity: 1, scale: 1 },
    { opacity: 0, scale: 0.9 }
  ],
  options: { duration: 100, easing: "ease" }
});

export {
  PCalendar
};
