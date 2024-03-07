import type { AstroBuiltinAttributes } from "astro"
import type { HTMLTag } from "astro/types"
import type { Temporal } from "temporal-polyfill"

export type Override<T1, T2> = Omit<T1, keyof T2> & T2

export type Dataset = Record<string, string | number | boolean>

export type Calendar =
	| "buddhist"
	| "chinese"
	| "coptic"
	| "dangi"
	| "ethioaa"
	| "ethiopic"
	| "gregory"
	| "hebrew"
	| "indian"
	| "islamic-civil"
	| "islamic-rgsa"
	| "islamic-tbla"
	| "islamic-umalqura"
	| "islamic"
	| "iso8601"
	| "japanese"
	| "persian"
	| "roc"

export type Formattable = {
	format?: string | undefined
}

export type LinkProps = Override<
	HTMLAttributes,
	{
		download?: boolean | undefined
		href: string
		hreflang?: string | undefined
		label?: string | undefined
		ping?: string | undefined
		referrerpolicy?:
			| "no-referrer"
			| "no-referrer-when-downgrade"
			| "origin"
			| "origin-when-cross-origin"
			| "same-origin"
			| "strict-origin"
			| "strict-origin-when-cross-origin"
			| "unsafe-url"
			| undefined
		rel?: string | Array<string> | undefined
		target?: "_blank" | "_parent" | "_self" | "_top" | undefined
		type?: string | undefined
	}
>

export type Name = {
	family: string
	given: string
	middle?: string | undefined
	prefix?: string | undefined
	suffix?: string | undefined
}

export type Person = {
	name: Name
	url?: string | undefined
}

export type DateTimeFormatOptions = {
	calendar: string | Temporal.CalendarProtocol
	dateStyle?: "full" | "long" | "medium" | "short" | undefined
	dayPeriod?: "long" | "narrow" | "short" | undefined
	localeMatcher?: "best fit" | "lookup" | undefined
	timeStyle?: "full" | "long" | "medium" | "short" | undefined
	timeZone: string | Temporal.TimeZoneProtocol
	weekday?: "long" | "narrow" | "short" | undefined
	day?: "2-digit" | "numeric" | undefined
	era?: "long" | "narrow" | "short" | undefined
	formatMatcher?: "basic" | "best fit" | undefined
	hour?: "2-digit" | "numeric" | undefined
	hour12?: true | false | undefined
	hourCycle?: "h11" | "h12" | "h23" | "h24" | undefined
	minute?: "2-digit" | "numeric" | undefined
	month?: "2-digit" | "long" | "narrow" | "numeric" | "short" | undefined
	second?: "2-digit" | "numeric" | undefined
	timeZoneName?: "long" | "short" | undefined
	year?: "2-digit" | "numeric" | undefined
}

// All the WAI-ARIA 1.1 attributes from https://www.w3.org/TR/wai-aria-1.1/
export type AriaAttributes = {
	/** Identifies the currently active element when DOM focus is on a composite widget, textbox, group, or application. */
	"aria-activedescendant"?: string | undefined
	/** Indicates whether assistive technologies will present all, or only parts of, the changed region based on the change notifications defined by the aria-relevant attribute. */
	"aria-atomic"?: boolean | "false" | "true" | undefined
	/**
	 * Indicates whether inputting text could trigger display of one or more predictions of the user's intended value for an input and specifies how predictions would be
	 * presented if they are made.
	 */
	"aria-autocomplete"?: "none" | "inline" | "list" | "both" | undefined
	/** Indicates an element is being modified and that assistive technologies MAY want to wait until the modifications are complete before exposing them to the user. */
	"aria-busy"?: boolean | "false" | "true" | undefined
	/**
	 * Indicates the current "checked" state of checkboxes, radio buttons, and other widgets.
	 * @see aria-pressed @see aria-selected.
	 */
	"aria-checked"?: boolean | "false" | "mixed" | "true" | undefined
	/**
	 * Defines the total number of columns in a table, grid, or treegrid.
	 * @see aria-colindex.
	 */
	"aria-colcount"?: number | string | undefined
	/**
	 * Defines an element's column index or position with respect to the total number of columns within a table, grid, or treegrid.
	 * @see aria-colcount @see aria-colspan.
	 */
	"aria-colindex"?: number | string | undefined
	/**
	 * Defines the number of columns spanned by a cell or gridcell within a table, grid, or treegrid.
	 * @see aria-colindex @see aria-rowspan.
	 */
	"aria-colspan"?: number | string | undefined
	/**
	 * Identifies the element (or elements) whose contents or presence are controlled by the current element.
	 * @see aria-owns.
	 */
	"aria-controls"?: string | undefined
	/** Indicates the element that represents the current item within a container or set of related elements. */
	"aria-current"?:
		| boolean
		| "false"
		| "true"
		| "page"
		| "step"
		| "location"
		| "date"
		| "time"
		| undefined
		| null
	/**
	 * Identifies the element (or elements) that describes the object.
	 * @see aria-labelledby
	 */
	"aria-describedby"?: string | undefined
	/**
	 * Identifies the element that provides a detailed, extended description for the object.
	 * @see aria-describedby.
	 */
	"aria-details"?: string | undefined
	/**
	 * Indicates that the element is perceivable but disabled, so it is not editable or otherwise operable.
	 * @see aria-hidden @see aria-readonly.
	 */
	"aria-disabled"?: boolean | "false" | "true" | undefined
	/**
	 * Indicates what functions can be performed when a dragged object is released on the drop target.
	 * @deprecated in ARIA 1.1
	 */
	"aria-dropeffect"?:
		| "none"
		| "copy"
		| "execute"
		| "link"
		| "move"
		| "popup"
		| undefined
		| null
	/**
	 * Identifies the element that provides an error message for the object.
	 * @see aria-invalid @see aria-describedby.
	 */
	"aria-errormessage"?: string | undefined
	/** Indicates whether the element, or another grouping element it controls, is currently expanded or collapsed. */
	"aria-expanded"?: boolean | "false" | "true" | undefined
	/**
	 * Identifies the next element (or elements) in an alternate reading order of content which, at the user's discretion,
	 * allows assistive technology to override the general default of reading in document source order.
	 */
	"aria-flowto"?: string | undefined
	/** Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element. */
	"aria-haspopup"?:
		| boolean
		| "false"
		| "true"
		| "menu"
		| "listbox"
		| "tree"
		| "grid"
		| "dialog"
		| undefined
		| null
	/**
	 * Indicates whether the element is exposed to an accessibility API.
	 * @see aria-disabled.
	 */
	"aria-hidden"?: boolean | "false" | "true" | undefined
	/**
	 * Indicates the entered value does not conform to the format expected by the application.
	 * @see aria-errormessage.
	 */
	"aria-invalid"?:
		| boolean
		| "false"
		| "true"
		| "grammar"
		| "spelling"
		| undefined
		| null
	/** Indicates keyboard shortcuts that an author has implemented to activate or give focus to an element. */
	"aria-keyshortcuts"?: string | undefined
	/**
	 * Defines a string value that labels the current element.
	 * @see aria-labelledby.
	 */
	"aria-label"?: string | undefined
	/**
	 * Identifies the element (or elements) that labels the current element.
	 * @see aria-describedby.
	 */
	"aria-labelledby"?: string | undefined
	/** Defines the hierarchical level of an element within a structure. */
	"aria-level"?: number | string | undefined
	/** Indicates that an element will be updated, and describes the types of updates the user agents, assistive technologies, and user can expect from the live region. */
	"aria-live"?: "off" | "assertive" | "polite" | undefined
	/** Indicates whether an element is modal when displayed. */
	"aria-modal"?: boolean | "false" | "true" | undefined
	/** Indicates whether a text box accepts multiple lines of input or only a single line. */
	"aria-multiline"?: boolean | "false" | "true" | undefined
	/** Indicates that the user may select more than one item from the current selectable descendants. */
	"aria-multiselectable"?: boolean | "false" | "true" | undefined
	/** Indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous. */
	"aria-orientation"?: "horizontal" | "vertical" | undefined
	/**
	 * Identifies an element (or elements) in order to define a visual, functional, or contextual parent/child relationship
	 * between DOM elements where the DOM hierarchy cannot be used to represent the relationship.
	 * @see aria-controls.
	 */
	"aria-owns"?: string | undefined
	/**
	 * Defines a short hint (a word or short phrase) intended to aid the user with data entry when the control has no value.
	 * A hint could be a sample value or a brief description of the expected format.
	 */
	"aria-placeholder"?: string | undefined
	/**
	 * Defines an element's number or position in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.
	 * @see aria-setsize.
	 */
	"aria-posinset"?: number | string | undefined
	/**
	 * Indicates the current "pressed" state of toggle buttons.
	 * @see aria-checked @see aria-selected.
	 */
	"aria-pressed"?: boolean | "false" | "mixed" | "true" | undefined
	/**
	 * Indicates that the element is not editable, but is otherwise operable.
	 * @see aria-disabled.
	 */
	"aria-readonly"?: boolean | "false" | "true" | undefined
	/**
	 * Indicates what notifications the user agent will trigger when the accessibility tree within a live region is modified.
	 * @see aria-atomic.
	 */
	"aria-relevant"?:
		| "additions"
		| "additions removals"
		| "additions text"
		| "all"
		| "removals"
		| "removals additions"
		| "removals text"
		| "text"
		| "text additions"
		| "text removals"
		| undefined
		| null
	/** Indicates that user input is required on the element before a form may be submitted. */
	"aria-required"?: boolean | "false" | "true" | undefined
	/** Defines a human-readable, author-localized description for the role of an element. */
	"aria-roledescription"?: string | undefined
	/**
	 * Defines the total number of rows in a table, grid, or treegrid.
	 * @see aria-rowindex.
	 */
	"aria-rowcount"?: number | string | undefined
	/**
	 * Defines an element's row index or position with respect to the total number of rows within a table, grid, or treegrid.
	 * @see aria-rowcount @see aria-rowspan.
	 */
	"aria-rowindex"?: number | string | undefined
	/**
	 * Defines the number of rows spanned by a cell or gridcell within a table, grid, or treegrid.
	 * @see aria-rowindex @see aria-colspan.
	 */
	"aria-rowspan"?: number | string | undefined
	/**
	 * Indicates the current "selected" state of various widgets.
	 * @see aria-checked @see aria-pressed.
	 */
	"aria-selected"?: boolean | "false" | "true" | undefined
	/**
	 * Defines the number of items in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.
	 * @see aria-posinset.
	 */
	"aria-setsize"?: number | string | undefined
	/** Indicates if items in a table or grid are sorted in ascending or descending order. */
	"aria-sort"?: "none" | "ascending" | "descending" | "other" | undefined
	/** Defines the maximum allowed value for a range widget. */
	"aria-valuemax"?: number | string | undefined
	/** Defines the minimum allowed value for a range widget. */
	"aria-valuemin"?: number | string | undefined
	/**
	 * Defines the current value for a range widget.
	 * @see aria-valuetext.
	 */
	"aria-valuenow"?: number | string | undefined
	/** Defines the human readable text alternative of aria-valuenow for a range widget. */
	"aria-valuetext"?: string | undefined
}

export type AriaRole =
	| "alert"
	| "alertdialog"
	| "application"
	| "article"
	| "banner"
	| "button"
	| "cell"
	| "checkbox"
	| "columnheader"
	| "combobox"
	| "complementary"
	| "contentinfo"
	| "definition"
	| "dialog"
	| "directory"
	| "document"
	| "feed"
	| "figure"
	| "form"
	| "grid"
	| "gridcell"
	| "group"
	| "heading"
	| "img"
	| "link"
	| "list"
	| "listbox"
	| "listitem"
	| "log"
	| "main"
	| "marquee"
	| "math"
	| "menu"
	| "menubar"
	| "menuitem"
	| "menuitemcheckbox"
	| "menuitemradio"
	| "navigation"
	| "none"
	| "note"
	| "option"
	| "presentation"
	| "progressbar"
	| "radio"
	| "radiogroup"
	| "region"
	| "row"
	| "rowgroup"
	| "rowheader"
	| "scrollbar"
	| "search"
	| "searchbox"
	| "separator"
	| "slider"
	| "spinbutton"
	| "status"
	| "switch"
	| "tab"
	| "table"
	| "tablist"
	| "tabpanel"
	| "term"
	| "textbox"
	| "timer"
	| "toolbar"
	| "tooltip"
	| "tree"
	| "treegrid"
	| "treeitem"

export type AnchorTarget = "_self" | "_blank" | "_parent" | "_top"

export type Child =
	| Node
	| Array<Node>
	| string
	| number
	| boolean
	| null
	| undefined
	| unknown
export type Children = Child | Array<Child>

export type DOMAttributes = {
	children?: Children

	// Clipboard Events
	oncopy?: string | undefined
	oncut?: string | undefined
	onpaste?: string | undefined

	// Composition Events
	oncompositionend?: string | undefined
	oncompositionstart?: string | undefined
	oncompositionupdate?: string | undefined

	// Focus Events
	onfocus?: string | undefined
	onfocusin?: string | undefined
	onfocusout?: string | undefined
	onblur?: string | undefined

	// Form Events
	onchange?: string | undefined
	oninput?: string | undefined
	onreset?: string | undefined
	onsubmit?: string | undefined
	oninvalid?: string | undefined
	onbeforeinput?: string | undefined

	// Image Events
	onload?: string | undefined
	onerror?: string | undefined // also a Media Event

	// Detail Events
	ontoggle?: string | undefined

	// Keyboard Events
	onkeydown?: string | undefined
	onkeypress?: string | undefined
	onkeyup?: string | undefined

	// Media Events
	onabort?: string | undefined
	oncanplay?: string | undefined
	oncanplaythrough?: string | undefined
	oncuechange?: string | undefined
	ondurationchange?: string | undefined
	onemptied?: string | undefined
	onencrypted?: string | undefined
	onended?: string | undefined
	onloadeddata?: string | undefined
	onloadedmetadata?: string | undefined
	onloadstart?: string | undefined
	onpause?: string | undefined
	onplay?: string | undefined
	onplaying?: string | undefined
	onprogress?: string | undefined
	onratechange?: string | undefined
	onseeked?: string | undefined
	onseeking?: string | undefined
	onstalled?: string | undefined
	onsuspend?: string | undefined
	ontimeupdate?: string | undefined
	onvolumechange?: string | undefined
	onwaiting?: string | undefined

	// MouseEvents
	onauxclick?: string | undefined
	onclick?: string | undefined
	oncontextmenu?: string | undefined
	ondblclick?: string | undefined
	ondrag?: string | undefined
	ondragend?: string | undefined
	ondragenter?: string | undefined
	ondragexit?: string | undefined
	ondragleave?: string | undefined
	ondragover?: string | undefined
	ondragstart?: string | undefined
	ondrop?: string | undefined
	onmousedown?: string | undefined
	onmouseenter?: string | undefined
	onmouseleave?: string | undefined
	onmousemove?: string | undefined
	onmouseout?: string | undefined
	onmouseover?: string | undefined
	onmouseup?: string | undefined

	// Selection Events
	onselect?: string | undefined
	onselectionchange?: string | undefined
	onselectstart?: string | undefined

	// Touch Events
	ontouchcancel?: string | undefined
	ontouchend?: string | undefined
	ontouchmove?: string | undefined
	ontouchstart?: string | undefined

	// Pointer Events
	ongotpointercapture?: string | undefined
	onpointercancel?: string | undefined
	onpointerdown?: string | undefined
	onpointerenter?: string | undefined
	onpointerleave?: string | undefined
	onpointermove?: string | undefined
	onpointerout?: string | undefined
	onpointerover?: string | undefined
	onpointerup?: string | undefined
	onlostpointercapture?: string | undefined

	// UI Events
	onscroll?: string | undefined
	onresize?: string | undefined

	// Wheel Events
	onwheel?: string | undefined

	// Animation Events
	onanimationstart?: string | undefined
	onanimationend?: string | undefined
	onanimationiteration?: string | undefined

	// Transition Events
	ontransitionstart?: string | undefined
	ontransitionrun?: string | undefined
	ontransitionend?: string | undefined
	ontransitioncancel?: string | undefined

	// Message Events
	onmessage?: string | undefined
	onmessageerror?: string | undefined

	// Global Events
	oncancel?: string | undefined
	onclose?: string | undefined
	onfullscreenchange?: string | undefined
	onfullscreenerror?: string | undefined
}

export type EventType =
	| "abort"
	| "animationend"
	| "animationiteration"
	| "animationstart"
	| "auxclick"
	| "beforeinput"
	| "cancel"
	| "canplay"
	| "canplaythrough"
	| "change"
	| "click"
	| "close"
	| "compositionend"
	| "compositionstart"
	| "compositionupdate"
	| "contextmenu"
	| "copy"
	| "cuechange"
	| "cut"
	| "dblclick"
	| "drag"
	| "dragend"
	| "dragenter"
	| "dragexit"
	| "dragleave"
	| "dragover"
	| "dragstart"
	| "drop"
	| "durationchange"
	| "emptied"
	| "encrypted"
	| "ended"
	| "error"
	| "focusin"
	| "focusout"
	| "fullscreenchange"
	| "fullscreenerror"
	| "gotpointercapture"
	| "input"
	| "invalid"
	| "keydown"
	| "keypress"
	| "keyup"
	| "load"
	| "loadeddata"
	| "loadedmetadata"
	| "loadstart"
	| "lostpointercapture"
	| "message"
	| "messageerror"
	| "mousedown"
	| "mouseenter"
	| "mouseleave"
	| "mousemove"
	| "mouseout"
	| "mouseover"
	| "mouseup"
	| "paste"
	| "pause"
	| "play"
	| "playing"
	| "pointercancel"
	| "pointerdown"
	| "pointerenter"
	| "pointerleave"
	| "pointermove"
	| "pointerout"
	| "pointerover"
	| "pointerup"
	| "progress"
	| "ratechange"
	| "reset"
	| "resize"
	| "scroll"
	| "seeked"
	| "seeking"
	| "select"
	| "selectionchange"
	| "selectstart"
	| "stalled"
	| "submit"
	| "suspend"
	| "timeupdate"
	| "toggle"
	| "touchcancel"
	| "touchend"
	| "touchmove"
	| "touchstart"
	| "transitioncancel"
	| "transitionend"
	| "transitionrun"
	| "transitionstart"
	| "volumechange"
	| "waiting"
	| "wheel"

export type BuiltinAttributes = AstroBuiltinAttributes & {
	as?: HTMLTag
	class?: string | undefined
}

export type Attributes = AriaAttributes &
	DOMAttributes & {
		// Standard HTML Attributes
		accesskey?: string | undefined
		autocapitalize?: string | undefined
		autofocus?: boolean | string | undefined
		class?: string | undefined
		contenteditable?:
			| "true"
			| "false"
			| boolean
			| "inherit"
			| string
			| undefined
			| null
		dir?: string | undefined
		draggable?: "true" | "false" | boolean | undefined
		enterkeyhint?:
			| "enter"
			| "done"
			| "go"
			| "next"
			| "previous"
			| "search"
			| "send"
			| undefined
			| null
		hidden?: boolean | string | undefined
		id?: string | undefined
		inert?: boolean | string | undefined
		inputmode?:
			| "none"
			| "text"
			| "tel"
			| "url"
			| "email"
			| "numeric"
			| "decimal"
			| "search"
			| undefined
			| null
		is?: string | undefined
		itemid?: string | undefined
		itemprop?: string | undefined
		itemref?: string | undefined
		itemscope?: boolean | string | undefined
		itemtype?: string | undefined
		lang?: string | undefined
		slot?: string | undefined
		spellcheck?: "true" | "false" | boolean | undefined
		style?: string | Record<string, unknown> | undefined
		tabindex?: number | string | undefined
		title?: string | undefined
		translate?: "yes" | "no" | undefined

		// <command>, <menuitem>
		radiogroup?: string | undefined

		// WAI-ARIA
		role?: AriaRole | undefined

		// RDFa Attributes
		about?: string | undefined
		datatype?: string | undefined
		inlist?: unknown
		prefix?: string | undefined
		property?: string | undefined
		resource?: string | undefined
		typeof?: string | undefined
		vocab?: string | undefined

		// Non-standard Attributes
		contextmenu?: string | undefined // Obsolete
		autosave?: string | undefined // Apple exclusive
		color?: string | undefined
		results?: number | string | undefined
		security?: string | undefined
		unselectable?: "on" | "off" | undefined // Internet Explorer
	}

export type BaseAttributes = Override<
	Attributes,
	{
		condition?: string | undefined
		dataset?: Dataset | undefined
		style?: string | undefined
		useMicrodata?: boolean | undefined
	}
>

// export type Validatable = {
// 	validation?: string | undefined
// }

// export type CcSvgProps = {
// 	fill: string
// 	license?: string | undefined
// 	size: string
// 	stroke: string
// }

// export type LicenseAttributes = {
// 	byAttribution?: boolean | undefined
// 	noDerivatives?: boolean | undefined
// 	nonCommercial?: boolean | undefined
// 	shareAlike?: boolean | undefined
// }

// export type LicenseData = {
// 	href: string
// 	license: string
// }

export type HTMLAttributes = BuiltinAttributes & BaseAttributes
