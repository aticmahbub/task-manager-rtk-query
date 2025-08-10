import {AddTaskModal} from '@/components/module/tasks/AddTaskModal';
import TaskCard from '@/components/module/tasks/TasksCard';
import {Tabs, TabsList, TabsTrigger} from '@/components/ui/tabs';
import {useGetTasksQuery} from '@/redux/api/baseApi';
import type {ITask} from '@/types';
export default function Tasks() {
    const {data, isLoading} = useGetTasksQuery(undefined);
    if (isLoading) {
        return <p>Loading</p>;
    }
    console.log({isLoading, data});
    return (
        <div className='mx-auto max-w-7xl px-5 mt-20'>
            <div className='flex justify-end items-center gap-5'>
                <h1 className='mr-auto '>Tasks</h1>
                <Tabs defaultValue='all'>
                    <TabsList className='grid w-full grid-cols-4'>
                        <TabsTrigger
                            // onClick={() => dispatch(updateFilter('all'))}
                            value='all'
                        >
                            All
                        </TabsTrigger>
                        <TabsTrigger
                            // onClick={() => dispatch(updateFilter('high'))}
                            value='medium'
                        >
                            High
                        </TabsTrigger>
                        <TabsTrigger
                            // onClick={() => dispatch(updateFilter('medium'))}
                            value='high'
                        >
                            Medium
                        </TabsTrigger>
                        <TabsTrigger
                            // onClick={() => dispatch(updateFilter('low'))}
                            value='low'
                        >
                            Low
                        </TabsTrigger>
                    </TabsList>
                </Tabs>
                <AddTaskModal />
            </div>
            <div className='space-y-5 mt-5'>
                {!isLoading &&
                    data?.tasks?.map((task: ITask) => (
                        <TaskCard task={task} key={task.id} />
                    ))}
            </div>
        </div>
    );
}
