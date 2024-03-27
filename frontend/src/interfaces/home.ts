interface ITab {
    id: string
    label: string
    title: string
    content?: string
    services?: string[]
    stats?: { value: string; label: string }[]
    selected: boolean
  }