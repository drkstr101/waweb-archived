---
labels: ['css', 'sizes', 'text']
description: 'A css component with sizes'
---

import { textSize } from './index';

A css component that export different sizes to use as a class.  
All the sizes can be overridden via css variables.

For example, `md` size is `16px` by default:

```js live=true
<span className={textSize.md}>some text</span>
```

The exported sizes from this component:

```css
.xxs {
  font-size: var(--wa-p-xxs, 12px);
}

.xs {
  font-size: var(--wa-p-xs, 14px);
}

.sm {
  font-size: var(--wa-p-sm, 15px);
}

.md {
  font-size: var(--wa-p-md, 16px);
}

.lg {
  font-size: var(--wa-p-lg, 18px);
}

.xl {
  font-size: var(--wa-p-xl, 20px);
}

.xxl {
  font-size: var(--wa-p-xxl, 24px);
}
```
