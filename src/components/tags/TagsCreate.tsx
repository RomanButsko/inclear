import { useState } from 'react'
import Select, { StylesConfig } from 'react-select'
import { Button } from '../../ui/button/Button'
import { ITag, OptionType } from './tags.interface'
import style from './TagsCreate.module.sass'
import { options, tagsList } from './tagsList'
import cn from 'classnames'

const customStyles: StylesConfig<OptionType, false> = {
    option: (provided, state) => ({
        ...provided,
        background: state.isSelected ? '#1e293b' : 'white',
        outline: 'none',
        '&:hover': {
            background: '#1e293b',
            color: 'white',
        },
    }),
}

const TagsCreate = () => {
    const [selectedOption, setSelectedOption] = useState<OptionType | null>(
        options[0]
    )
    const [savedTags, setSavedTags] = useState<ITag[] | null>(null)
    const [isCopied, setIsCopied] = useState<boolean>(false)

    const handleSelectChange = (selectedOption: OptionType | null) => {
        setSelectedOption(selectedOption)
        setSavedTags(null)
    }

    const handleSelectTag = (value: ITag) => {
        if (savedTags?.includes(value)) {
            setSavedTags(savedTags.filter((tag) => tag !== value))
        } else {
            setSavedTags((prevState) => [...(prevState || []), value])
        }
    }

    const handleThemeSelectedTag = (value: ITag) => {
        return !!savedTags?.find((item) => item.name === value.name)
    }

    const handleCopyTags = () => {
        if (savedTags) {
            const tags = savedTags.map((tag) => tag.name)
            navigator.clipboard.writeText(tags.join(','))
            setIsCopied(true)

            setTimeout(() => {
                setIsCopied(false)
            }, 500)
        }
    }

    return (
        <div className={style.container}>
            <div className={style.container_btns}>
                <div className={style.container_btns__up}>
                    <span className={style.container_title}>
                        Choose some tags and click generate
                    </span>
                    <Button className={style.container_btns__generate}>
                        Generate
                    </Button>
                </div>
                <div className={style.container_btns__block}>
                    <Button
                        className={style.container_btns__clear}
                        onClick={() => setSavedTags(null)}
                    >
                        Clear Tags {savedTags?.length || ''}
                    </Button>
                    <Button
                        className={style.container_btns__copy}
                        onClick={handleCopyTags}
                    >
                        {isCopied ? 'Copied'! : 'Copy Tags'}
                    </Button>
                </div>
            </div>
            <Select
                className={style.container_select}
                classNamePrefix="select"
                defaultValue={selectedOption}
                name="category"
                theme={(theme) => ({
                    ...theme,
                    borderRadius: 0,
                    colors: {
                        ...theme.colors,
                        primary25: 'hotpink',
                        primary: 'black',
                    },
                })}
                options={options}
                onChange={(selectedOption) =>
                    handleSelectChange(selectedOption)
                }
                styles={customStyles}
            />
            <div className={style.listBlock}>
                {Object.keys(tagsList[selectedOption?.label || 'Women']).map(
                    (key) => (
                        <div className={style.list_container} key={key}>
                            <div className={style.list_title}>{key}</div>
                            <div className={style.list_tags}>
                                {tagsList[selectedOption?.label || 'Women'][
                                    key
                                ].map((tag) => (
                                    <Button
                                        className={cn(style.list_tags__btn, {
                                            [style.list_tags__btn__active]:
                                                handleThemeSelectedTag(tag),
                                        })}
                                        key={tag.id}
                                        onClick={() => handleSelectTag(tag)}
                                    >
                                        {tag.name}
                                    </Button>
                                ))}
                            </div>
                        </div>
                    )
                )}
            </div>
        </div>
    )
}

export default TagsCreate
