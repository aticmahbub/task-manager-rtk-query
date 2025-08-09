import TMForm from '@/components/form/TMForm';
import TMInput from '@/components/form/TMInput';
import {Button} from '@/components/ui/button';
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';

import {Plus} from 'lucide-react';
import type {FieldValues, SubmitHandler} from 'react-hook-form';

export function AddUserModal() {
    const handleSubmit: SubmitHandler<FieldValues> = () => {
        // const userData: IUser = {
        //     id: uuid(),
        //     userName: data.name,
        // };
    };

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button>
                    Add User <Plus />
                </Button>
            </DialogTrigger>
            <DialogContent className='sm:max-w-[425px]'>
                <TMForm className='space-y-3' onSubmit={handleSubmit}>
                    <DialogHeader>
                        <DialogTitle>Add User</DialogTitle>
                    </DialogHeader>

                    <TMInput name='name' label='Name' />

                    <DialogFooter>
                        <DialogClose asChild>
                            <Button type='submit'>Save changes</Button>
                        </DialogClose>
                    </DialogFooter>
                </TMForm>
            </DialogContent>
        </Dialog>
    );
}
