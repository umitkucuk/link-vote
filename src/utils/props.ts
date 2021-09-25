import React from 'react'
/**
 * Alias for all valid HTML props for `<div>` element.
 * Does not include React's `ref` or `key`.
 */
export type HTMLDivProps = React.HTMLAttributes<HTMLDivElement>

/**
 * Alias for all valid HTML props for `<button>` element.
 * Does not include React's `ref` or `key`.
 */
export type HTMLButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>

/**
 * Alias for all valid HTML props for `<input>` element.
 * Does not include React's `ref` or `key`.
 */
export type HTMLInputProps = React.InputHTMLAttributes<HTMLInputElement>

/**
 * Alias for all valid HTML props for `<textarea>` element.
 * Does not include React's `ref` or `key`.
 */
export type HTMLTextAreaProps =
  React.TextareaHTMLAttributes<HTMLTextAreaElement>
