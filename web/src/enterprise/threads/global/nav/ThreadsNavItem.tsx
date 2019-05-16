import React, { useCallback, useState } from 'react'
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap'
import { LinkWithIconOnlyTooltip } from '../../../../components/LinkWithIconOnlyTooltip'
import { ThreadsIcon } from '../../icons'
import { ThreadsNavItemDropdownMenu } from './ThreadsNavItemDropdownMenu'

interface Props {}

/**
 * An item in {@link GlobalNavbar} that links to the threads area.
 */
export const ThreadsNavItem: React.FunctionComponent<Props> = props => {
    const [isOpen, setIsOpen] = useState(false)
    const toggleIsOpen = useCallback(() => setIsOpen(!isOpen), [isOpen])
    const setIsOpenTrue = useCallback(() => setIsOpen(true), [isOpen])
    const setIsOpenFalse = useCallback(() => setIsOpen(false), [isOpen])
    return (
        <Dropdown
            isOpen={isOpen}
            toggle={toggleIsOpen}
            onMouseLeave={setIsOpenFalse}
            onClick={setIsOpenFalse}
            inNavbar={true}
            direction="down"
        >
            <DropdownToggle tag="span" data-toggle="dropdown" aria-expanded={isOpen} onMouseEnter={setIsOpenTrue}>
                <LinkWithIconOnlyTooltip
                    to="/threads"
                    text="Threads"
                    icon={ThreadsIcon}
                    className="nav-link btn btn-link text-decoration-none"
                />
            </DropdownToggle>
            <ThreadsNavItemDropdownMenu className="mt-0 threads-nav-item__dropdown-menu" />
        </Dropdown>
    )
}
