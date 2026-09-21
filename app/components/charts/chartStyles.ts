export type TagColor = 'slate' | 'teal' | 'amber' | 'coral'

export const accentBg: Record<TagColor, string> = {
  slate: 'bg-ct-slate',
  teal: 'bg-ct-teal',
  amber: 'bg-ct-amber',
  coral: 'bg-ct-coral',
}

export const accentText: Record<TagColor, string> = {
  slate: 'text-ct-slate',
  teal: 'text-ct-teal',
  amber: 'text-ct-amber',
  coral: 'text-ct-coral',
}

export const accentBorder: Record<TagColor, string> = {
  slate: 'border-ct-slate',
  teal: 'border-ct-teal',
  amber: 'border-ct-amber',
  coral: 'border-ct-coral',
}

export const accentSubtleBg: Record<TagColor, string> = {
  slate: 'bg-ct-slate-subtle',
  teal: 'bg-ct-teal-subtle',
  amber: 'bg-ct-amber-subtle',
  coral: 'bg-ct-coral-subtle',
}

export const accentStroke: Record<TagColor, string> = {
  slate: 'stroke-ct-slate',
  teal: 'stroke-ct-teal',
  amber: 'stroke-ct-amber',
  coral: 'stroke-ct-coral',
}
