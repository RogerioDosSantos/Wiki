# Cron

Cron is a time-based job scheduler in Unix-like operating systems. It allows users to schedule scripts, commands, and programs to run automatically at specified times and intervals. Cron is widely used for system maintenance, backups, automation, and recurring tasks.

---

## Key Features

- **Time-based Scheduling**: Run jobs at fixed times, dates, or intervals (e.g., every minute, hour, day, week, or month).
- **User-level and System-level Jobs**: Supports both user-specific and system-wide scheduled tasks.
- **Flexible Syntax**: Crontab files use a simple, powerful syntax for specifying schedules.
- **Logging**: Can log job execution and errors for troubleshooting.
- **Lightweight and Reliable**: Minimal resource usage and proven reliability.
- **Integration**: Works with any executable script or command.

---

## Cron Startup Behavior

When the cron daemon starts, it does **not** immediately execute any scheduled jobs. Instead, cron waits until the next scheduled time for each job. For example, if a job is scheduled to run every minute (`* * * * *`), cron will wait until the start of the next minute after startup to execute the job. There is no immediate or catch-up execution for jobs that were missed while cron was not running.

> **Note:** If you need a job to run immediately on startup, you must invoke it manually or use a separate startup script in addition to cron.

---

## Useful Links

- [Cron Wikipedia](https://en.wikipedia.org/wiki/Cron)
- [Crontab Guru (Schedule Helper)](https://crontab.guru/)
- [man 5 crontab](https://man7.org/linux/man-pages/man5/crontab.5.html)
- [How to Use Cron](https://www.digitalocean.com/community/tutorials/how-to-use-cron-to-automate-tasks-on-a-vps)
- [Crontab Quick Reference](https://www.adminschoice.com/crontab-quick-reference)

---

## See Also

- [Systemd Timers](./systemd.md): Modern alternative for scheduling on systemd-based systems.
- [at](https://man7.org/linux/man-pages/man1/at.1.html): Schedule a one-time job.
- [Windows Task Scheduler](./windows_task_scheduler.md): Windows equivalent for scheduled tasks.

---
