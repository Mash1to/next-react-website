import { parseISO, format } from 'date-fns'
import ja from 'date-fns/locale/ja'

export default function ConvertDate({ dateISO }) {
    return (
        <time dateTime={dateISO}>
            {format(parseISO(dateISO), 'yyyy年 MM月 dd日', {
                local: ja,
            })}
        </time>
    )
}